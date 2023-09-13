import { z } from 'zod'
import { join } from 'node:path'
import * as dotenv from 'dotenv'
import { actions } from './action.mjs'
import { Document } from 'langchain/document'
import { PromptTemplate } from 'langchain/prompts'
import { RetrievalQAChain } from 'langchain/chains'
import { FaissStore } from 'langchain/vectorstores/faiss'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { OutputFixingParser, StructuredOutputParser } from 'langchain/output_parsers'

dotenv.config()

async function loadVectorStore() {
  const directory = join(process.cwd(), 'loadedVectorStore')
  const docStoreJSON = join(process.cwd(), 'loadedVectorStore', 'docstore.json')
  if (existsSync(docStoreJSON)) return await FaissStore.load(directory, new OpenAIEmbeddings())
  return await FaissStore.fromDocuments([new Document({ pageContent: 'Hey' })], new OpenAIEmbeddings())
}

async function chat(input, pluginPath) {
  const outputFile = join(process.cwd(), 'src', 'content', 'plugins-tutorials', `${pluginPath}.md`)
  const currentContent = existsSync(outputFile) ? readFileSync(outputFile, 'utf8') : null
  try {
    const vectorStore = await loadVectorStore()
    writeFileSync(outputFile, '', 'utf8')
    const model = new ChatOpenAI({
      streaming: true,
      callbacks: [
        {
          handleLLMNewToken(token) {
            appendFileSync(outputFile, token)
          },
        },
      ],
    })
    const outputParser = StructuredOutputParser.fromZodSchema(
      z.object({
        answer: z.string().describe('answer to question in HTML friendly format, use all of the tags wherever possible and including reference links'),
      }),
    )
    const outputFixingParser = OutputFixingParser.fromLLM(model, outputParser)
    const prompt = new PromptTemplate({
      template: 'Answer the user question as best and be as detailed as possible:\n{format_instructions}\n{query}',
      inputVariables: ['query'],
      partialVariables: {
        format_instructions: outputFixingParser.getFormatInstructions(),
      },
    })
    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), prompt)
    await chain.call({ query: input })
  } catch (error) {
    writeFileSync(outputFile, currentContent, 'utf8')
    console.error(error.message || error.toString())
  }
}

actions
  .filter((i) => i.href.length > 0)
  .slice(0, 3)
  .forEach((item) => {
    console.log(item)
    chat(`Generate a markdown tutorial of using ${item.name} package`, item.href.substring(item.href.lastIndexOf('/') + 1))
  })
