<template>
  <header class="max-w-3xl mx-auto px-6 pt-6 pb-24 flex justify-between items-center">
    <NuxtLink to="/" class="group font-serif text-3xl font-medium tracking-tight hover:text-gray-600 transition-all">
      P<span class="relative inline-block align-bottom max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out group-hover:max-w-[4rem]">aula</span>.
    </NuxtLink>
    <nav class="flex items-center gap-6">

      <NuxtLink
          to="/blog"
          active-class="text-black font-semibold"
          class="text-sm font-medium text-gray-500 hover:text-black transition-colors"
      >
        Blog
      </NuxtLink>

      <span class="h-4 w-px bg-gray-200"></span>

      <div class="flex items-center gap-4">

        <a href="https://bsky.app" target="_blank" aria-label="Bluesky" class="flex items-center text-gray-400 hover:text-black transition-colors">
          <Icon name="simple-icons:bluesky" size="1rem" />
        </a>

        <a href="https://github.com" target="_blank" aria-label="GitHub" class="flex items-center text-gray-400 hover:text-black transition-colors">
          <Icon name="simple-icons:github" size="1rem" />
        </a>

      </div>

    </nav>
  </header>
</template>