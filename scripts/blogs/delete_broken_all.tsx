import fg from 'fast-glob'
import { readFileSync, unlinkSync } from 'fs'
import matter from 'gray-matter'

const blogFiles = fg.sync(['src/content/blog/**/*.md*'], { dot: true, absolute: true })
let changedCount = 0

const markdownStarts = [
  'I currently do not',
  "I'm unable to",
  "I don't have",
  'I am unable to',
  "I'm not familiar",
  "I'm sorry",
  "I don't know",
  "I'm not sure",
  'Sorry, I',
  "I don't have information",
]

for (const filePath of blogFiles) {
  const content = readFileSync(filePath, 'utf8')
  const { data: frontmatter, content: markdownContent } = matter(content)
  const trimmedContent = content.trim()
  const trimmedMarkdown = markdownContent.trim()

  const contentStartsMatch = markdownStarts.some((str) => trimmedContent.startsWith(str))
  const markdownStartsMatch = markdownStarts.some((str) => trimmedMarkdown.startsWith(str))

  if (!trimmedContent || Object.keys(frontmatter).length === 0 || contentStartsMatch || markdownStartsMatch) {
    unlinkSync(filePath)
    changedCount++
  }
}
console.log(`Checked ${blogFiles.length} files. Deleted ${changedCount} files.`)
