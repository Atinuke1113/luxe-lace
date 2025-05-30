// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'E-commerce',
      meta: [
        {
          name: 'description',
          content: 'e-commerce website built with Nuxt 3, Vuetify, and Tailwind CSS',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.lordicon.com/bhenfmcm.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
        {
          src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
      ],
    },
  },
 
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-quasar-ui',
    'nuxt-nodemailer',
  ],
  nodemailer: {
    from: process.env.NUXT_NODEMAILER_FROM,
    host: process.env.NUXT_NODEMAILER_HOST,
    port: process.env.NUXT_NODEMAILER_PORT,
    secure: process.env.NUXT_NODEMAILER_SECURE,
    auth: {
      user: process.env.NUXT_NODEMAILER_USER,
      pass: process.env.NUXT_NODEMAILER_AUTH,
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  quasar: {
    plugins: ['Notify', 'Dialog'],
  },
  plugins: [
    { src: '~/plugins/useVuetify.js', mode: 'client' },
    { src: '@/plugins/aos', ssr: false, mode: 'client' },
    { src: '~/plugins/useLottie.js', mode: 'client' },
    // { src: '~/plugins/usemysql.server.js' },
  ],

  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
});
