<template>
  <div class="flex flex-col min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">

    <SiteHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <SiteFooter />

  </div>
</template>