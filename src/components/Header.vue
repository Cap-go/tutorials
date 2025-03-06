<script setup lang="ts">
import { ref } from 'vue'
import { useRuntimeConfig } from '@/config/app'

const config = useRuntimeConfig()
const brand = config.public.brand

const menuMobile = ref(false)
</script>

<template>
  <header class="relative py-2">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="flex-shrink-0">
          <a href="https://capgo.app" title="Capgo home" aria-label="Capgo home" class="font-prompt flex items-center pr-3 text-4xl font-medium">
            <img class="h-18 w-auto pr-1" loading="eager" height="72" width="133" :alt="`${brand} logo`" :title="`${brand} logo`" src="/capgo_logo.webp" />
          </a>
        </div>

        <div class="flex lg:hidden">
          <button type="button" class="text-white" title="Expand menu" @click="menuMobile = !menuMobile">
            <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a
            href="https://capgo.app/pricing/"
            title="Pricing"
            class="border-b-2 border-transparent text-base font-medium transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
          >
            Pricing
          </a>
          <a
            href="https://capgo.app/blog/"
            title="Blog"
            class="border-b-2 border-transparent text-base font-medium transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
          >
            Blog
          </a>
          <a
            href="https://capgo.app/docs"
            title="Documentation"
            class="border-b-2 border-transparent text-base font-medium transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
          >
            Documentation
          </a>
          <a
            href="https://web.capgo.app/login/"
            title="Login"
            target="_blank"
            class="border-b-2 border-transparent text-base font-medium transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
          >
            Login
          </a>
          <a
            href="https://capgo.app/register"
            target="_blank"
            title="Join discord"
            class="font-pj rounded-xl border border-gray-300 bg-transparent px-5 py-2 text-base font-semibold leading-7 text-gray-300 transition-all duration-200 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            role="button"
          >
            Register
          </a>
        </div>
      </div>
    </div>
    <div :class="{ hidden: !menuMobile }">
      <div class="mt-2 space-y-1 bg-gray-700 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="https://capgo.app//pricing/" title="Pricing" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
          Pricing
        </a>
        <a href="https://capgo.app//blog/" title="Blog" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"> Blog </a>
        <a href="https://capgo.app//docs/" title="Documentation" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
          Documentation
        </a>
        <a
          href="https://web.capgo.app/login"
          target="_blank"
          title="Login"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Login
        </a>
        <a
          href="https://capgo.app/register"
          title="Communauty"
          target="_blank"
          class="font-pj block rounded-md rounded-xl border border-gray-300 bg-gray-900 bg-transparent px-5 py-2 text-base font-medium font-semibold leading-7 text-gray-300 text-white transition-all duration-200 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          Register
        </a>
      </div>
    </div>
  </header>
</template>
