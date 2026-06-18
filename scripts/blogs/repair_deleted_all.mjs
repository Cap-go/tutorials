import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const enDir = path.join(repoRoot, 'src/content/blog/en')
const sourceCommit = 'b40f928^'
const deleteCommit = 'b40f928'

if (!existsSync(enDir)) mkdirSync(enDir, { recursive: true })

const yamlValue = (value) => {
  const text = String(value ?? '')
  if (/[:#{}[\],&*!|>'"%@`]|^\s|-\s/.test(text) || text.includes('\n')) {
    return JSON.stringify(text)
  }
  return text
}

const buildFile = ({ title, description, created_at, published, slug, locale }, body) => {
  const lines = ['---', `title: ${yamlValue(title)}`]
  if (description) lines.push(`description: ${yamlValue(description)}`)
  if (created_at) lines.push(`created_at: ${yamlValue(created_at)}`)
  lines.push(`published: ${published !== false}`)
  if (slug) lines.push(`slug: ${yamlValue(slug)}`)
  if (locale) lines.push(`locale: ${yamlValue(locale)}`)
  lines.push('---', '', body.trim(), '')
  return lines.join('\n')
}

const parseFrontmatterValue = (line) => {
  const jsonKey = line.match(/^"([^"]+)":\s*(.+?)(,)?\s*$/)
  if (jsonKey) {
    let value = jsonKey[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    return [jsonKey[1], value]
  }
  const yamlKey = line.match(/^([^:]+):\s*(.+?)\s*$/)
  if (!yamlKey) return null
  let value = yamlKey[2].trim().replace(/,\s*$/, '')
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1)
  }
  return [yamlKey[1].trim(), value]
}

const isValidFrontmatter = (content) => {
  const trimmed = content.trim()
  if (!trimmed.startsWith('---') || trimmed.startsWith('```')) return false
  const end = trimmed.indexOf('\n---', 3)
  if (end === -1) return false
  const data = {}
  for (const line of trimmed.slice(3, end).trim().split('\n')) {
    const parsed = parseFrontmatterValue(line)
    if (parsed) data[parsed[0]] = parsed[1]
  }
  return typeof data.title === 'string' && data.title.length > 0
}

const unwrapContent = (raw) => {
  let content = raw.trim()
  if (content.startsWith('```')) {
    content = content.replace(/^```(?:markdown|md)?\s*\n?/i, '').replace(/\n?```\s*$/i, '').trim()
  }
  return content.replace(/\n?```\s*$/i, '').trim()
}

const normalizeDate = (value) => {
  if (!value) return undefined
  const parsed = new Date(String(value))
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10)
  return String(value)
}

const parseRepaired = (raw) => {
  const content = unwrapContent(raw)
  if (!content.startsWith('---')) return null
  const end = content.indexOf('\n---', 3)
  if (end === -1) return null

  const data = {}
  for (const line of content.slice(3, end).trim().split('\n')) {
    const parsed = parseFrontmatterValue(line)
    if (parsed) data[parsed[0]] = parsed[1]
  }

  const body = content.slice(end + 4).trim()
  if (typeof data.title !== 'string' || data.title.length === 0) return null
  return { data, body }
}

const deletedFiles = execSync(`git diff ${sourceCommit}..${deleteCommit} --name-only --diff-filter=D`, {
  cwd: repoRoot,
  encoding: 'utf8',
})
  .trim()
  .split('\n')
  .filter((file) => /^src\/content\/blog\/[^/]+\.md/.test(file))

let restored = 0
let skippedDuplicate = 0
let skippedUnrecoverable = 0

for (const file of deletedFiles) {
  const basename = path.basename(file)
  const target = path.join(enDir, basename)

  if (existsSync(target) && isValidFrontmatter(readFileSync(target, 'utf8'))) {
    skippedDuplicate++
    continue
  }

  let raw = ''
  try {
    raw = execSync(`git show ${sourceCommit}:${file}`, { cwd: repoRoot, encoding: 'utf8' })
  } catch {
    skippedUnrecoverable++
    continue
  }

  const parsed = parseRepaired(raw)
  if (!parsed || parsed.body.length < 20) {
    skippedUnrecoverable++
    continue
  }

  const slug =
    typeof parsed.data.slug === 'string' && parsed.data.slug.length > 0
      ? parsed.data.slug
      : basename.replace(/\.md$/, '')

  const output = buildFile(
    {
      title: parsed.data.title,
      description: parsed.data.description,
      created_at: normalizeDate(parsed.data.created_at),
      published: parsed.data.published !== 'false',
      slug,
      locale: 'en',
    },
    parsed.body,
  )

  writeFileSync(target, output, 'utf8')
  restored++
}

const stats = { deletedFiles: deletedFiles.length, restored, skippedDuplicate, skippedUnrecoverable }
writeFileSync(path.join(repoRoot, 'repair-stats.json'), JSON.stringify(stats, null, 2))
process.stdout.write(
  `Checked ${deletedFiles.length} deleted files. Restored ${restored}. Skipped duplicates ${skippedDuplicate}. Unrecoverable ${skippedUnrecoverable}.\n`,
)
