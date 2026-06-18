import sitemap from '@astrojs/sitemap'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'
import config from './configs.json'
import { defaultLocale } from './src/services/locale'

export default defineConfig({
  trailingSlash: 'always',
  env: {
    validateSecrets: true,
    schema: {
      ORAMA_CLOUD_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      ORAMA_CLOUD_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  site: `https://${config.base_domain.prod}`,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    concurrency: 2,
  },
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
  },
  plugins: [
    paraglideVitePlugin({
      outdir: './src/paraglide',
      project: './project.inlang',
      disableAsyncLocalStorage: true,
    }),
  ],
  i18n: {
    locales: [defaultLocale],
    defaultLocale,
    routing: {
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
