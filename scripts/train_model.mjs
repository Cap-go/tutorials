import '@dotenvx/dotenvx/config'
import { join } from 'node:path'
import { exit } from 'node:process'
import { existsSync } from 'node:fs'
import { actions } from './action.mjs'
import { Document } from 'langchain/document'
import { FaissStore } from 'langchain/vectorstores/faiss'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

const appDir = process.cwd()

async function loadVectorStore() {
  const directory = join(appDir, 'loadedVectorStore')
  const docStoreJSON = join(appDir, 'loadedVectorStore', 'docstore.json')
  if (existsSync(docStoreJSON)) return await FaissStore.load(directory, new OpenAIEmbeddings())
  return await FaissStore.fromDocuments([new Document({ pageContent: 'Hey' })], new OpenAIEmbeddings())
}

async function saveVectorStore(vectorStore) {
  const directory = join(appDir, 'loadedVectorStore')
  await vectorStore.save(directory)
}

async function train(list) {
  try {
    console.log('Stared training...')
    console.table({ 'Number of packages being trained': list.length })
    const vectorStore = await loadVectorStore()
    const executeAsyncOperation = (element) => {
      return new Promise(async (resolve) => {
        try {
          const filePath = join(process.cwd(), 'openai-readmes', `${element[3]}_${element[4]}.md`)
          if (existsSync(filePath)) {
            const loader = new TextLoader(filePath)
            const data = await loader.load()
            const textSplitter = new RecursiveCharacterTextSplitter({
              chunkSize: 3096,
              chunkOverlap: 128,
            })
            const tempSplitDocs = await textSplitter.splitDocuments(data)
            await vectorStore.addDocuments(tempSplitDocs)
          }
        } catch (e) {
          console.log(e)
        } finally {
          resolve()
        }
      })
    }
    console.log('Training in progress...')
    await Promise.all(list.map((element) => executeAsyncOperation(element)))
    console.log('Saving the vectorStore...')
    await saveVectorStore(vectorStore)
    console.log('Saved!')
    console.log('Training done!')
    exit()
  } catch (error) {
    console.log(error.message || error.toString())
  }
}

// Parse command-line arguments for start and end limits
const startLimit = parseInt(process.argv[2]) || 0
const endLimit = parseInt(process.argv[3]) || actions.length

train(
  actions
    .slice(startLimit, endLimit)
    .filter((i) => i.href.length > 0)
    .map((i) => i.href.split('/')),
)
