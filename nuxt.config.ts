export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/mdc'],

    runtimeConfig: {
        atprotoRepo: 'pauliecodes.bsky.social',
    },

    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap'
                }
            ]
        }
    },

    devtools: {enabled: true}
})