import vue from '@astrojs/vue'
import UnoCSS from '@unocss/astro'
import config from './configs.json'
import { defineConfig } from 'astro/config'

export default defineConfig({
  compressHTML: true,
  site: `https://${config.base_domain.prod}`,
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  integrations: [vue(), UnoCSS({ injectReset: true })],
})
