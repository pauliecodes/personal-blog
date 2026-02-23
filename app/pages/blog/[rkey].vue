<script setup>
const route = useRoute()
const event = useRequestEvent()

const { data: post, error } = await useFetch(`/api/post/${route.params.rkey}`)

if (error.value && import.meta.server && event) {
  setResponseStatus(event, 404)
}

useSeoMeta({
  title: () => post.value?.title ? `${post.value.title} | Paula` : 'Blog | Paula',
  ogTitle: () => post.value?.title,
  ogType: 'article',
})
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 pb-24">
    <article>
      <NuxtLink to="/blog" class="text-sm font-serif text-gray-400 hover:text-gray-700 transition-colors mb-8 block">
        ← Back to blog
      </NuxtLink>

      <div v-if="error" class="py-20 text-center">
        <h1 class="font-serif text-2xl text-gray-900 mb-4">Something went wrong</h1>
        <p class="font-serif text-gray-500 mb-6">Could not load this post.</p>
        <NuxtLink to="/blog" class="font-serif text-gray-400 hover:text-gray-700 underline transition-colors">Back to blog</NuxtLink>
      </div>

      <div v-else-if="post">
        <header class="mb-12">
          <h1 class="text-4xl sm:text-5xl font-serif font-medium text-gray-900 mb-4 leading-tight">{{ post.title }}</h1>
          <time class="text-sm font-serif text-gray-400">{{ formatDate(post.createdAt) }} · {{ post.readingTime }}</time>
        </header>
        <div class="prose prose-lg prose-p:font-serif prose-p:text-gray-700 prose-headings:font-serif prose-headings:font-medium prose-a:font-semibold prose-a:underline-offset-4 prose-a:decoration-2 hover:prose-a:underline">
          <MDC :value="post.content" />
        </div>
      </div>

      <div v-else class="py-20 text-center">
        <h1 class="font-serif text-2xl text-gray-900 mb-4">Post not found</h1>
        <NuxtLink to="/blog" class="font-serif text-gray-400 hover:text-gray-700 underline transition-colors">Back to blog</NuxtLink>
      </div>
    </article>
  </div>
</template>