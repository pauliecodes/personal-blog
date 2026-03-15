<script setup lang="ts">
defineProps<{
  title?: string
  date?: string
  readingTime?: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col bg-[#FAFAFA] text-gray-900 p-20 border-t-[16px] border-gray-900">

    <div class="flex items-center justify-between w-full mb-auto">
      <div class="font-serif text-5xl font-medium tracking-tight">Paula.</div>
      <div class="text-3xl font-serif font-medium text-gray-500">Blog</div>
    </div>

    <div class="flex flex-col w-full my-auto">
      <h1 class="text-7xl font-serif font-medium text-gray-900 leading-tight line-clamp-3">
        {{ title }}
      </h1>
    </div>

    <div class="flex items-center justify-between w-full mt-auto">
      <div class="flex items-center text-3xl font-serif text-gray-400">
        <span v-if="date">{{ date }}</span>
        <span v-if="date" class="mx-4">·</span>
        <span v-if="readingTime">{{ readingTime }}</span>
      </div>

      <div class="w-16 h-16 bg-[#1a202c] rounded-xl flex items-center justify-center shadow-sm">
        <span class="text-white font-serif text-4xl font-medium mt-1">P.</span>
      </div>
    </div>

  </div>
</template>