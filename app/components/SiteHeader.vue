<script setup>
const config = useRuntimeConfig()
const { locale, t, toggle } = useLocale()
</script>

<template>
  <header class="w-full max-w-3xl mx-auto px-6 pt-6 pb-24 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
    <NuxtLink to="/" class="group font-serif text-3xl font-medium tracking-tight hover:text-gray-600 transition-all">
      P<span
        class="relative inline-block align-bottom max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out group-hover:max-w-[4rem]">aula</span>.
    </NuxtLink>

    <nav class="flex items-center justify-between sm:justify-start w-full sm:w-auto sm:gap-6">
      <!-- Page links — left on mobile, inline on desktop -->
      <div class="flex items-center gap-3 sm:gap-6">
        <NuxtLink
            to="/blog"
            active-class="text-black font-semibold"
            class="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
          Blog
        </NuxtLink>

        <NuxtLink
            to="/resume"
            active-class="text-black font-semibold"
            class="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
          {{ t('nav.resume') }}
        </NuxtLink>
      </div>

      <!-- Language + social — right on mobile, inline on desktop -->
      <div class="flex items-center gap-3">
        <button
            @click="toggle"
            aria-label="Toggle language"
            class="text-sm font-medium transition-colors whitespace-nowrap"
        >
          <span :class="locale === 'en' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'">EN</span>
          <span class="mx-0.5 text-gray-300">|</span>
          <span :class="locale === 'de' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'">DE</span>
        </button>

        <span class="hidden sm:block h-4 w-px bg-gray-200" aria-hidden="true"></span>

        <a :href="`https://bsky.app/profile/${config.public.socialBluesky}`" target="_blank" rel="noopener noreferrer"
           aria-label="Bluesky" class="flex items-center text-gray-400 hover:text-black transition-colors">
          <Icon name="simple-icons:bluesky" size="1rem"/>
        </a>

        <a :href="`https://github.com/${config.public.socialGithub}`" target="_blank" rel="noopener noreferrer"
           aria-label="GitHub" class="flex items-center text-gray-400 hover:text-black transition-colors">
          <Icon name="simple-icons:github" size="1rem"/>
        </a>
      </div>
    </nav>
  </header>
</template>
