import { join } from 'path'
import { exit } from 'process'
import { spawnSync } from 'child_process'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import search from 'libnpmsearch'

const searchKeywords = ['plugin', 'capacitor']

async function fetchPackages() {
  let count = 0
  let totalLimit = 10 ** 10
  try {
    // Parse command-line arguments for start and end limits
    if (!isNaN(parseInt(process.argv[2]))) totalLimit = parseInt(process.argv[2])
  } catch (e) {
    totalLimit = 10 ** 10
  }
  try {
    const resultArray = []
    const packageData = await search(searchKeywords.join(' '), {
      limit: totalLimit,
    })
    const packagesWithKeywords = packageData.filter((pkg) => {
      const packageKeywords = pkg.keywords || []
      return searchKeywords.every((keyword) => packageKeywords.includes(keyword))
    })
    count = packagesWithKeywords.length
    resultArray.push(
      ...packagesWithKeywords.map((pkg) => ({
        name: pkg.name,
        href: pkg.links?.repository || '',
        title: pkg.name.split('/').pop(),
        description: pkg.description || '',
        author: pkg.maintainers?.[0]?.username || '',
      })),
    )
    console.table({ 'Total Packages': count })
    console.log(`Writing to scripts/action.mjs...`)
    if (!existsSync(join(process.cwd(), 'scripts', 'action.mjs'))) {
      mkdirSync(join(process.cwd(), 'scripts'))
    }
    writeFileSync(join(process.cwd(), 'scripts', 'action.mjs'), `export const actions = [${resultArray.map((i) => JSON.stringify(i))}]`)
    console.log(`Writing to src/config/plugins.ts...`)
    if (!existsSync(join(process.cwd(), 'src', 'config', 'plugins.ts'))) {
      mkdirSync(join(process.cwd(), 'src'))
      mkdirSync(join(process.cwd(), 'src', 'config'))
    }
    writeFileSync(
      join(process.cwd(), 'src', 'config', 'plugins.ts'),
      `export interface Action {
        icon?: any
        href: string
        title: string
        name?: string
        author: string
        description: string
        iconForeground?: string
        iconBackground?: string
      }
      export interface Plugin extends Action {
        npmDownloads?: number
        githubStars?: number
        readme?: string
        datePublished?: string
        dateModified?: string
        tutorial?: string
      }
      export const actions = [${resultArray.map((i) => JSON.stringify(i))}]`,
    )
    console.log(`Running prettier...`)
    spawnSync('pnpm', ['fmt'])
    console.log(`Done!`)
    exit()
  } catch (error) {
    console.error(error)
  }
}

fetchPackages()
