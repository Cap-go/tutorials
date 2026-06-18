import fg from 'fast-glob'
import matter from 'gray-matter'
import { existsSync, readFileSync, unlinkSync } from 'node:fs'
import path from 'node:path'

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

const isValidFrontmatter = (content: string) => {
  const trimmed = content.trim()
  if (!trimmed.startsWith('---')) return false
  if (trimmed.startsWith('```')) return false

  try {
    const { data: frontmatter } = matter(trimmed)
    return typeof frontmatter.title === 'string' && frontmatter.title.length > 0
  } catch {
    return false
  }
}

for (const filePath of blogFiles) {
  const content = readFileSync(filePath, 'utf8')
  const trimmedContent = content.trim()
  const relativePath = path.relative(path.join(process.cwd(), 'src/content/blog'), filePath)
  const isRootLevel = !relativePath.includes(path.sep)

  let frontmatter: Record<string, unknown> = {}
  let markdownContent = trimmedContent

  try {
    const parsed = matter(trimmedContent)
    frontmatter = parsed.data
    markdownContent = parsed.content.trim()
  } catch {
    unlinkSync(filePath)
    changedCount++
    continue
  }

  const contentStartsMatch = markdownStarts.some((str) => trimmedContent.startsWith(str))
  const markdownStartsMatch = markdownStarts.some((str) => markdownContent.startsWith(str))
  const missingTitle = typeof frontmatter.title !== 'string' || frontmatter.title.length === 0
  const wrappedInFence = trimmedContent.startsWith('```')

  const enDuplicate =
    isRootLevel &&
    existsSync(path.join(process.cwd(), 'src/content/blog/en', path.basename(filePath))) &&
    isValidFrontmatter(
      readFileSync(path.join(process.cwd(), 'src/content/blog/en', path.basename(filePath)), 'utf8'),
    )

  if (
    !trimmedContent ||
    Object.keys(frontmatter).length === 0 ||
    missingTitle ||
    wrappedInFence ||
    contentStartsMatch ||
    markdownStartsMatch ||
    enDuplicate
  ) {
    unlinkSync(filePath)
    changedCount++
  }
}

console.log(`Checked ${blogFiles.length} files. Deleted ${changedCount} files.`)
