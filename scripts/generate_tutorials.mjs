import '@dotenvx/dotenvx/config'
import { FaissStore } from '@langchain/community/vectorstores/faiss'
import { Document } from '@langchain/core/documents'
import { StructuredOutputParser } from '@langchain/core/output_parsers'
import { PromptTemplate } from '@langchain/core/prompts'
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'
import { execSync } from 'child_process'
import { RetrievalQAChain } from 'langchain/chains'
import { OutputFixingParser } from 'langchain/output_parsers'
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { z } from 'zod'
import { actions } from './action.mjs'

async function loadVectorStore() {
  const directory = join(process.cwd(), 'loadedVectorStore')
  const docStoreJSON = join(process.cwd(), 'loadedVectorStore', 'docstore.json')
  if (existsSync(docStoreJSON)) return await FaissStore.load(directory, new OpenAIEmbeddings())
  return await FaissStore.fromDocuments([new Document({ pageContent: 'Hey' })], new OpenAIEmbeddings())
}

let createTuts = {}
let processedCount = 0

async function chat(input, pluginPath) {
  const contentDir = join(process.cwd(), 'src', 'content')
  if (!existsSync(contentDir)) mkdirSync(contentDir)
  const tutorialsDir = join(contentDir, 'plugins-tutorials')
  if (!existsSync(tutorialsDir)) mkdirSync(tutorialsDir)
  const outputFile = join(tutorialsDir, `${pluginPath}.md`)
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
    processedCount++
    if (processedCount % 100 === 0) {
      console.log('Committing changes after processing 100 items...')
      execSync('git config --global user.name "Martin DONADIEU"')
      execSync('git config --global user.email "martindonadieu@gmail.com"')
      execSync('git lfs track "loadedVectorStore/*.json"')
      execSync('git lfs track "loadedVectorStore/*.index"')
      execSync('git add .gitattributes')
      execSync('git add loadedVectorStore/*.json loadedVectorStore/*.index')
      execSync('git add -A')
      execSync('git commit -m "Commit generated files"')
      execSync('git push origin main -f')
    }
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
