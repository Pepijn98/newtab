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
            link: [],
            style: [],
            script: [],
            noscript: [
                { children: "JavaScript is required" }
            ]
        }
    },
    modules: [
        "@element-plus/nuxt"
    ],
    elementPlus: {
        importStyle: "scss"
    }
});
