import { XMLParser } from 'fast-xml-parser'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import config from '../configs.json'
import { defaultLocale, locales } from '../src/services/locale'

interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: number
}

const HOSTNAME = `https://${config.base_domain.prod}`
const parser = new XMLParser()

function stripLocalePath(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/'
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1) || '/'
  }
  return pathname
}

function localizedUrl(loc: string, locale: string): string {
  const url = new URL(loc)
  const basePath = stripLocalePath(url.pathname)
  url.pathname = locale === defaultLocale ? basePath : basePath === '/' ? `/${locale}/` : `/${locale}${basePath}`
  return url.toString()
}

function expandLocalizedUrls(urls: SitemapUrl[]): SitemapUrl[] {
  const expanded = new Map<string, SitemapUrl>()

  for (const item of urls) {
    for (const locale of locales) {
      const loc = localizedUrl(item.loc, locale)
      if (!expanded.has(loc)) {
        expanded.set(loc, {
          ...item,
          loc,
        })
      }
    }
  }

  return [...expanded.values()].sort((left, right) => left.loc.localeCompare(right.loc))
}

const sitemapPath = join('dist', 'sitemap-0.xml')

if (existsSync(sitemapPath)) {
  const xmlData = readFileSync(sitemapPath, 'utf-8')
  const jsonObj = parser.parse(xmlData)
  const rawUrls = jsonObj?.urlset?.url
  let sitemapUrls: SitemapUrl[] = []
  if (Array.isArray(rawUrls)) {
    sitemapUrls = rawUrls
  } else if (rawUrls) {
    sitemapUrls = [rawUrls]
  }

  const smStream = new SitemapStream({ hostname: HOSTNAME })

  expandLocalizedUrls(sitemapUrls).forEach((item) => {
    smStream.write({
      url: item.loc,
      lastmod: item.lastmod,
      changefreq: item.changefreq,
      priority: item.priority,
    })
  })

  smStream.end()
  const sitemap = await streamToPromise(smStream)
  writeFileSync(sitemapPath, sitemap.toString(), 'utf-8')
}
