<script setup lang="ts">
import { computed, ref } from 'vue'
import Blog from '@/components/Tutorial.vue'
import { useRuntimeConfig } from '@/config/app'

const props = defineProps<{
  Content?: any
}>()
const config = useRuntimeConfig()
const selectedTag = ref('all')

const filteredPosts = computed(() => {
  if (selectedTag.value === 'all') return props.Content
  else return props.Content.filter((article) => article.data.tag.toUpperCase() === selectedTag.value.toUpperCase())
})

const uniqueTags = computed(() => {
  const tags = new Set()
  for (const article of props.Content) {
    if (article.data.tag) {
      tags.add(article.data.tag.toUpperCase())
    }
  }

  const uniqueTagsArray = Array.from(tags)
    .map((tag) => tag[0].toUpperCase() + tag.slice(1))
    .sort()
  return uniqueTagsArray
})
</script>

<template>
  <section class="py-10 sm:py-12 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Latest from the tutorials</h1>
        <h2 class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-50">
          {{ config.public.blog_description }}
        </h2>
      </div>
      <div class="mx-auto mt-8 max-w-3xl text-center">
        <div class="mb-4">
          <div class="mt-5 flex flex-wrap justify-center gap-2">
            <button
              :class="{ 'bg-gray-500': selectedTag === 'all', 'border border-gray-300 bg-transparent': selectedTag !== 'all' }"
              class="rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-gray-500 hover:text-white"
              @click="selectedTag = 'all'"
            >
              ALL
            </button>
            <button
              v-for="(tag, index) in uniqueTags"
              :key="index"
              :class="{ 'bg-gray-500': selectedTag === tag, 'border border-gray-300 bg-transparent': selectedTag !== tag }"
              class="rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-gray-500 hover:text-white"
              @click="selectedTag = tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 lg:mt-16 lg:max-w-full lg:grid-cols-3">
        <Blog
          v-for="article in filteredPosts"
          :tag="article.data.tag"
          :key="article.data.slug"
          :link="article.data.slug"
          :title="article.data.title"
          :date="article.data.created_at"
          :description="article.data.description"
        />
      </div>
    </div>
  </section>
</template>
