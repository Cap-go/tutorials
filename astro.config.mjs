import vue from '@astrojs/vue'
import UnoCSS from '@unocss/astro'
import config from './configs.json'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: `https://${config.base_domain.prod}`,
  integrations: [
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
  ],
  vite: {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
    },
  },
})
