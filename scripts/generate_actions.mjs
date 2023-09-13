import axios from 'axios'
import { join } from 'path'
import { exit } from 'process'
import { writeFileSync } from 'fs'
import { spawnSync } from 'child_process'

const searchKeywords = ['plugin', 'capacitor']
const searchUrl = `https://registry.npmjs.org/-/v1/search?text=${searchKeywords.join('+')}&size=100`

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
    let page = 1
    const resultArray = []
    while (true && count < totalLimit) {
      const response = await axios.get(`${searchUrl}&from=${(page - 1) * 100}`)
      const packageData = response.data.objects
      const packagesWithKeywords = packageData.filter((pkg) => {
        const packageKeywords = pkg.package.keywords || []
        return searchKeywords.every((keyword) => packageKeywords.includes(keyword))
      })
      count += packagesWithKeywords.length
      resultArray.push(
        ...packagesWithKeywords.map((pkg) => ({
          name: pkg.package.name,
          href: pkg.package.links.repository || '',
          title: pkg.package.name.split('/').pop(),
          description: pkg.package.description || '',
          author: pkg.package.author ? pkg.package.author.name : '',
        })),
      )
      if (packageData.length < 100) break
      page++
    }
    console.table({ 'Total Packages': count })
    console.log(`Writing to scripts/action.mjs...`)
    writeFileSync(join(process.cwd(), 'scripts', 'action.mjs'), `export const actions = [${resultArray.map((i) => JSON.stringify(i))}]`)
    console.log(`Writing to src/config/plugins.ts...`)
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
