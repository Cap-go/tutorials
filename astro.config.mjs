import vue from '@astrojs/vue'
import UnoCSS from '@unocss/astro'
import config from './configs.json'
import AstroPWA from '@vite-pwa/astro'
import { pwa } from './src/config/pwa'
import { defineConfig } from 'astro/config'

export default defineConfig({
  compressHTML: true,
  site: `https://${config.base_domain.prod}`,
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  integrations: [vue(), AstroPWA(pwa), UnoCSS({ injectReset: true })],
})
