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

let createTuts = {}

async function chat(input, pluginPath) {
  const outputFile = join(process.cwd(), 'src', 'content', 'plugins-tutorials', `${pluginPath}.md`)
  const currentContent = existsSync(outputFile) ? readFileSync(outputFile, 'utf8') : null
  // if file exists
  if (currentContent && currentContent.length > 10) {
    return
  }
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
    createTuts[pluginPath] = '✅'
  } catch (error) {
    createTuts[pluginPath] = '❌'
    if (currentContent) {
      writeFileSync(outputFile, currentContent, 'utf8')
    }
    console.error(error.message || error.toString())
  }
}

// Parse command-line arguments for start and end limits
const startLimit = parseInt(process.argv[2]) || 0
const endLimit = parseInt(process.argv[3]) || actions.length

const inputQuery = (item) =>
  `Generate a markdown tutorial of using ${
    item.name
  } package, also add a frontmatter with values in double quotes to the same file containing title for the blog, description as the summary of what will be in the blog, created_at as the date of this answer, published boolean value as true and slug value equal to ${item.href.substring(
    item.href.lastIndexOf('/') + 1,
  )}`

async function spinTutorails(list) {
  console.log('Spinning tutorials...')
  const gap = 5
  const len = list.length
  const div = Math.floor(len / gap)
  for (let i = 0; i < div; i += gap) {
    console.log('Processing', i, 'to', i + gap)
    await Promise.all(list.slice(i, i + gap).map((item) => chat(inputQuery(item), item.href.substring(item.href.lastIndexOf('/') + 1))))
  }
  await Promise.all(list.slice(div * gap).map((item) => chat(inputQuery(item), item.href.substring(item.href.lastIndexOf('/') + 1))))
  console.log('Done!')
  console.table(createTuts)
}

spinTutorails(actions.slice(startLimit, endLimit).filter((i) => i.href.length > 0))
