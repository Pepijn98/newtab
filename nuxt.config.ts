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
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" },
            ],
            script: [
                { src: "https://unpkg.com/webextension-polyfill@latest/dist/browser-polyfill.min.js" }
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
        importStyle: "scss"
    }
});
