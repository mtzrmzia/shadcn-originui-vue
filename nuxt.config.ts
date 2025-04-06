// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
            ignore: ['~/components/ui', '~/components/originui']
        },
        {
            path: '~/components/ui',
            pathPrefix: false,
        },
        {
            path: '~/components/originui',
            pathPrefix: false,
            prefix: 'OU',
            ignore: ['**/index.ts']
        }
    ],
    modules: [
        'shadcn-nuxt',
        '@nuxtjs/color-mode'
    ],
    shadcn: {
        prefix: 'SC',
        componentDir: './components/ui',
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
        disableTransition: false,
    },
})