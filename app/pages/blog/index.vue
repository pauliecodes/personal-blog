<script setup>

const { data: posts, error } = await useFetch('/api/posts')

useSeoMeta({
  title: 'Blog | Paula',
  description: 'Thoughts, learnings, and things I\'m building.',
  ogTitle: 'Blog | Paula',
  ogDescription: 'Thoughts, learnings, and things I\'m building.',
})
</script>

<template>
  <main class="max-w-2xl mx-auto px-6 pb-24">
    <div class="mb-12">
      <h1 class="text-4xl sm:text-5xl font-serif font-medium text-gray-900 mb-4">Blog</h1>
      <p class="text-lg font-serif text-gray-500 italic">Thoughts, learnings, and things I'm building.</p>
    </div>

    <div v-if="error" class="py-12 text-center">
      <p class="font-serif text-gray-500">Could not load posts. Please try again later.</p>
    </div>

    <ul v-else class="flex flex-col">
      <li v-for="post in posts" :key="post.rkey" class="group border-t border-gray-200 last:border-b">
        <NuxtLink :to="`/blog/${post.rkey}`" class="block py-6 hover:bg-gray-50 transition-colors">
          <time class="text-sm text-gray-400 font-serif">{{ formatDate(post.createdAt) }} · {{ post.readingTime }}</time>
          <h3 class="text-xl font-serif font-semibold text-gray-900 mt-1 group-hover:underline decoration-2 underline-offset-4">
            {{ post.title }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>