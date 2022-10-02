import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  // modules
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // https://github.com/cipami/nuxt-lodash
    'nuxt-lodash'
    // unocss plugin - https://github.com/unocss/unocss
    // '@unocss/nuxt',
    // '@intlify/nuxt3',
    // '@nuxtjs/color-mode',
  ],
  // css
  css: [
    '~/assets/inter.css',
    '~/assets/css/tailwind.css'
  ],
  // auto import components
  components: true,
  //build
  build: {
    transpile: [
      '@headlessui/vue',
      '@heroicons/vue',
    ],
  },
})
