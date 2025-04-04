import '@dotenvx/dotenvx/config'
import { z } from 'zod'
import { join } from 'node:path'
import { actions } from './action.mjs'
import { Document } from '@langchain/core/documents'
import { PromptTemplate } from '@langchain/core/prompts'
import { RetrievalQAChain } from 'langchain/chains'
import { FaissStore } from '@langchain/community/vectorstores/faiss'
import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai'
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { StructuredOutputParser } from '@langchain/core/output_parsers'
import { OutputFixingParser } from 'langchain/output_parsers'

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

const getSlug = (href) => href.substring(href.lastIndexOf('/') + 1).toLowerCase()

const inputQuery = (item) =>
  `Generate a markdown tutorial of using ${
    item.name
  } package, also add a frontmatter with values making sure that they are in double quotes (and the content in them does not contain double quotes) to the same file containing title for the blog, description as the summary of what will be in the blog, created_at as the date of this answer, published boolean value as true and slug value equal to ${getSlug(
    item.href,
  )} and make sure that there is no commas at the end of each key value pair in the frontmatter`

async function spinTutorials(list) {
  const gap = 5
  const len = list.length
  const div = Math.floor(len / gap)
  // Process the first > 5
  for (let i = 0; i < div * gap; i += gap) {
    console.log('Processing', i, 'to', i + gap)
    await Promise.all(list.slice(i, i + gap).map((item) => chat(inputQuery(item), getSlug(item.href))))
  }
  // Process the remaining < 5
  if (len % gap !== 0) {
    await Promise.all(list.slice(div * gap).map((item) => chat(inputQuery(item), getSlug(item.href))))
  }
  console.log('Done!')
  console.table(createTuts)
}

spinTutorials(actions.slice(startLimit, endLimit).filter((i) => i.href.length > 0))
