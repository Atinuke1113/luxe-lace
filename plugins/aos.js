import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.AOS = AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        }) // eslint-disable-line new-cap
    }
})