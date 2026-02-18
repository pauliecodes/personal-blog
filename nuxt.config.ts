export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/icon'],

    nitro: {
        preset: 'vercel'
    },

    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap'
                }
            ]
        }
    },

    devtools: {enabled: true}
})