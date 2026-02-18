<script setup>
const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('content')
        .where('path', '<>', '/')
        .order('date', 'DESC')
        .all()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
}
</script>

<template>
  <main class="max-w-2xl mx-auto px-6">
    <section>
      <h1 class="font-serif text-3xl mb-4 italic text-gray-900 font-light">Entries</h1>
      <hr class="border-0 border-t border-gray-300 mb-12">

      <div class="flex flex-col gap-12">
        <article v-for="post in posts" :key="post.path" class="group">
          <NuxtLink :to="post.path" class="block">
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">

              <time class="font-serif italic text-gray-400 text-sm w-24 shrink-0 transition-colors group-hover:text-gray-900">
                {{ formatDate(post.date) }}
              </time>

              <div class="relative">
                <h3 class="text-xl font-serif font-medium text-gray-900 decoration-gray-300 decoration-1 underline-offset-[6px] group-hover:underline group-hover:decoration-black transition-all">
                  {{ post.title }}
                </h3>

                <p v-if="post.description" class="text-gray-500 text-sm mt-2 leading-relaxed max-w-lg">
                  {{ post.description }}
                </p>
              </div>

            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>