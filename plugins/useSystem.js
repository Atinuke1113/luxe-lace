
export default defineNuxtPlugin(async (nuxtApp) => {
    let appName = 'Educate Africa'
    let theme = {
        primary: 'blue',
        secondary: 'green',
        brand: 'blue',
        button: 'green',
        tprimary: 'white',
        tsecondary: 'green-300',
        card: 'rgb(211, 208, 208)',
        cardbutton: 'black'
    }

    let faq = [
        
    ]

    
    nuxtApp.vueApp.provide('UseTheme', theme);
    nuxtApp.provide('UseTheme', theme);
    
    
    nuxtApp.vueApp.provide('AppName', appName);
    nuxtApp.provide('AppName',appName);
    
    nuxtApp.vueApp.provide('UseFaq', faq);
    nuxtApp.provide('UseFaq', faq);
})