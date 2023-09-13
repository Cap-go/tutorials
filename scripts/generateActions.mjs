import axios from 'axios'
import { join } from 'path'
import { writeFileSync } from 'fs'
import { spawn } from 'child_process'

const searchKeywords = ['plugin', 'capacitor']
const searchUrl = `https://registry.npmjs.org/-/v1/search?text=${searchKeywords.join('+')}&size=100`

async function fetchPackages() {
  try {
    let page = 1
    const resultArray = []
    while (true) {
      const response = await axios.get(`${searchUrl}&from=${(page - 1) * 100}`)
      const packageData = response.data.objects
      const packagesWithKeywords = packageData.filter((pkg) => {
        const packageKeywords = pkg.package.keywords || []
        return searchKeywords.every((keyword) => packageKeywords.includes(keyword))
      })
      resultArray.push(
        ...packagesWithKeywords.map((pkg) => ({
          name: pkg.package.name,
          href: pkg.package.links.repository || '',
          title: pkg.package.name.split('/').pop(),
          description: pkg.package.description || '',
          author: pkg.package.author ? pkg.package.author.name : '',
        })),
      )
      if (packageData.length < 100) {
        break
      }
      page++
    }
    writeFileSync(join(process.cwd(), 'scripts', 'action.mjs'), `export const actions = [${resultArray.map((i) => JSON.stringify(i))}]`)
    spawn('pnpm', ['fmt'])
  } catch (error) {
    console.error(error)
  }
}

fetchPackages()
