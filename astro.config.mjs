import vue from '@astrojs/vue'
import UnoCSS from '@unocss/astro'
import config from './configs.json'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  compressHTML: true,
  site: `https://${config.base_domain.prod}`,
  integrations: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
    UnoCSS({
      injectReset: true,
    }),
    sitemap(),
  ],
})
