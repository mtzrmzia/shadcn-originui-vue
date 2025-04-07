// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    alias: {
        '@/lib/utils': resolve(__dirname, 'lib/utils.ts'),
    },
    modules: [
        '@nuxtjs/color-mode',
        'shadcn-nuxt'
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