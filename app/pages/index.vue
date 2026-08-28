<script setup>
const { t } = useLocale()

useSeoMeta({
  title: "Paula | Software Developer",
  description: "Software developer. Fan of Open Source. Passionate about building tools that help others.",
  ogTitle: "Paula",
  ogDescription: "Software developer. Fan of Open Source. Passionate about building tools that help others.",
  ogType: "website",
})
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 pb-24">

    <div class="mb-4">
      <h1 class="text-5xl sm:text-6xl font-serif font-medium text-gray-900 mb-6">
        {{ t('home.greeting') }}
      </h1>
      <p class="text-xl font-serif text-gray-600 leading-relaxed max-w-xl italic">
        {{ t('home.tagline1') }}<br>
        {{ t('home.tagline2') }}
      </p>
    </div>

    <div class="font-serif my-8 text-lg text-gray-700 leading-loose">
      <div class="grid grid-cols-[3rem_1fr] items-baseline mb-4">
        <span class="text-xs font-semibold text-gray-400">01</span>
        <span>{{ t('home.work') }} <span class="font-semibold">CODIN IT</span></span>
      </div>
      <div class="grid grid-cols-[3rem_1fr] items-baseline mb-4">
        <span class="text-xs font-semibold text-gray-400">02</span>
        <span>{{ t('home.oss') }} <a href="https://npmx.dev" target="_blank" rel="noopener noreferrer"
                                 class="font-semibold hover:underline underline-offset-4 decoration-2">npmx.dev</a>{{ t('home.ossAfter') }}</span>
      </div>
      <div class="grid grid-cols-[3rem_1fr] items-baseline mb-4">
        <span class="text-xs font-semibold text-gray-400">03</span>
        <span>{{ t('home.location') }}</span>
      </div>
    </div>

    <div
        class="prose prose-lg prose-p:font-serif prose-p:text-gray-700 prose-a:font-semibold prose-a:no-underline prose-a:underline-offset-4 prose-a:decoration-2 hover:prose-a:underline">
      <p>{{ t('home.bio1') }}</p>
      <p>{{ t('home.bio2a') }}<a href="https://npmx.dev" target="_blank" rel="noopener noreferrer">npmx.dev</a>{{ t('home.bio2b') }}</p>
      <p>{{ t('home.bio3') }}</p>
      <p>{{ t('home.bio4') }}</p>
    </div>

  </div>
</template>
