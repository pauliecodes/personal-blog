<script setup>
const route = useRoute()
const { data: page } = await useAsyncData('home', () =>
    queryCollection('content').path(route.path).first()
)
</script>

<template>
  <main class="max-w-2xl mx-auto px-6 pb-24">
    <article class="prose prose-base prose-headings:font-black">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </main>
</template>