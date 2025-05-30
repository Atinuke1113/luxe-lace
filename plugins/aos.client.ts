import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.vueApp.use(AOS.init({
      // Global settings
      duration: 800,
      easing: 'ease-in-out',
      once: true
    }))
  }
})