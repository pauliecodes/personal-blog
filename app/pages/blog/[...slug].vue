<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.path}`, () =>
    queryCollection('content').path(route.path).first()
)

const formatDate = (date) => {
  if (!date) return 'DRAFT'
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}
</script>

<template>
  <main class="max-w-2xl mx-auto px-6 pb-24">
    <article class="prose prose-lg prose-gray prose-headings:font-serif prose-headings:font-medium">

      <NuxtLink to="/blog" class="no-underline text-sm text-gray-400  transition-colors mb-12 block group">
        <span class="inline-block transform group-hover:-translate-x-1 transition-transform">←</span>
        Back
      </NuxtLink>

      <div v-if="page">
        <header class="mb-16">
          <h1 class="text-4xl sm:text-5xl font-serif text-gray-900 mb-4 leading-tight tracking-tight">
            {{ page.title }}
          </h1>

          <div class="flex items-center gap-4 text-sm font-serif italic text-gray-400">
            <time>{{ formatDate(page.date) }}</time>
            <span class="w-1 h-1 rounded-full bg-gray-200"></span>
            <span>{{ page.description }}</span>
          </div>
        </header>

        <ContentRenderer :value="page" class="font-serif text-gray-700 leading-loose" />
      </div>

      <div v-else class="py-20 text-center">
        <h1 class="font-serif italic text-3xl text-gray-900 mb-4">Post not found.</h1>
        <p class="text-gray-500 mb-8 font-serif">It seems this thought hasn't been planted yet.</p>
        <NuxtLink to="/" class="text-blue-600 underline decoration-2 underline-offset-4">Return home</NuxtLink>
      </div>

    </article>
  </main>
</template>