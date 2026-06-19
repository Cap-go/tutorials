import { defaultLocale, locales } from '@/services/locale'
import type { AstroGlobal } from 'astro'

export interface AlternateVersion {
  locale: string
  url: string
}

export function generateAlternateVersions(astro: AstroGlobal): AlternateVersion[] {
  const baseUrl = astro.locals.runtimeConfig.public.baseUrl
  const pathname = astro.url.pathname

  const currentLocale = astro.locals.locale
  let basePath = pathname

  if (currentLocale !== defaultLocale) {
    basePath = pathname.replace(`/${currentLocale}`, '') || '/'
  }

  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`
  }
  if (!basePath.endsWith('/')) {
    basePath = `${basePath}/`
  }

  return locales.map((locale) => ({
    locale,
    url: locale === defaultLocale ? `${baseUrl}${basePath}` : `${baseUrl}/${locale}${basePath}`,
  }))
}
