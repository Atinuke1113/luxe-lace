import axios from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => { 
    const UseAxios = axios.create({
      
        // responseType: 'json',
    });

    nuxtApp.vueApp.provide('UseAxios', UseAxios);
    nuxtApp.provide('UseAxios', UseAxios);
})