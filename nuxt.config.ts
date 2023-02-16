// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: "Home",
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { charset: "utf-8" }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" }
            ],
            script: [
                { src: "libs/polyfill/browser-polyfill.min.js" },
                { src: "libs/dompurify/purify.min.js" },
                { src: "libs/marked/marked.min.js" }
            ],
            noscript: [
                { children: "JavaScript is required" }
            ]
        }
    },
    css: [
        "@fortawesome/fontawesome-svg-core/styles.css",
        "~/assets/scss/index.scss"
    ],
    typescript: {
        strict: true,
        shim: false
    },
    modules: [
        "@element-plus/nuxt",
        "@vueuse/nuxt"
    ],
    elementPlus: {
        importStyle: "scss",
        themes: ["dark"]
    }
});
