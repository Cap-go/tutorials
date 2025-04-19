import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import UnoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'
import config from './configs.json'

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
  server: {
    port: 3000,
    open: true,
  },
})
