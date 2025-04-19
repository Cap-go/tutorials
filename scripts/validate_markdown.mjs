import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const prompt = (question) => new Promise((resolve) => rl.question(question, resolve))

async function validateMarkdownFiles() {
  const tutorialsDir = path.join(process.cwd(), 'src', 'content', 'plugins-tutorials')
  try {
    const files = await fs.readdir(tutorialsDir)
    const mdFiles = files.filter((file) => file.endsWith('.md'))
    for (const file of mdFiles) {
      const filePath = path.join(tutorialsDir, file)
      try {
        const content = await fs.readFile(filePath, 'utf-8')
        const parsed = matter(content)
        const requiredFields = ['title']
        const missingFields = requiredFields.filter((field) => !parsed.data[field])
        if (missingFields.length > 0) {
          console.log(`\nError in file: ${file}`)
          console.log(`Missing required fields: ${missingFields.join(', ')}`)
          const answer = await prompt('Do you want to delete this file? (y/n): ')
          if (answer.toLowerCase() === 'y') {
            await fs.unlink(filePath)
            console.log(`Deleted file: ${file}`)
          }
        }
      } catch (error) {
        console.log(`\nError parsing file: ${file}`)
        console.log(`Error message: ${error.message}`)
        const answer = await prompt('Do you want to delete this file? (y/n): ')
        if (answer.toLowerCase() === 'y') {
          await fs.unlink(filePath)
          console.log(`Deleted file: ${file}`)
        }
      }
    }
  } catch (error) {
    console.error('Error reading directory:', error)
  } finally {
    rl.close()
  }
}

validateMarkdownFiles()
