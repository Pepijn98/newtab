const host = process.env.NODE_ENV === "production" ? "https://vdbroek.dev" : "http://localhost:3000"

export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: "Home",
            meta: [
                { "http-equiv": "X-UA-Compatible", property: "http-equiv", content: "IE=edge" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { charset: "utf-8" },
                { hid: "author", name: "author", content: "Pepijn van den Broek" },
                { hid: "description", name: "description", content: "A clean personal new tab page" },
                { hid: "theme-color", name: "theme-color", content: "#4B86B4" },
                { hid: "og-title", property: "og:title", content: "Home" },
                { hid: "og-url", property: "og:url", content: host },
                { hid: "og-image", property: "og:image", content: `${host}/assets/android-chrome-512x512.png` },
                { hid: "og-type", property: "og:type", content: "website" },
                { hid: "og-site_name", property: "og:site_name", content: host },
                { hid: "og-description", property: "og:description", content: "A clean personal new tab page" },
                { hid: "og-locale", property: "og:locale", content: "en" },
                { hid: "application-name", property: "application-name", content: "Home" },
                { hid: "fragment", property: "fragment", content: "!" },
                { hid: "apple-mobile-web-app-capable", property: "apple-mobile-web-app-capable", content: "yes" },
                { hid: "msapplication-TileColor", name: "msapplication-TileColor", content: "#4B86B4" },
                { hid: "msapplication-TileImage", name: "msapplication-TileImage", content: `${host}/assets/mstile-144x144.png` },
                { hid: "msapplication-square70x70logo", name: "msapplication-square70x70logo", content: `${host}/assets/mstile-70x70.png` },
                { hid: "msapplication-square150x150logo", name: "msapplication-square150x150logo", content: `${host}/assets/mstile-150x150.png` },
                { hid: "msapplication-wide310x150logo", name: "msapplication-wide310x150logo", content: `${host}/assets/mstile-310x150.png` },
                { hid: "msapplication-square310x310logo", name: "msapplication-square310x310logo", content: `${host}/assets/mstile-310x310.png` },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" },
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "/assets/apple-touch-icon-57x57.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "114x114", href: "/assets/apple-touch-icon-114x114.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "/assets/apple-touch-icon-72x72.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "144x144", href: "/assets/apple-touch-icon-144x144.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "/assets/apple-touch-icon-60x60.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "120x120", href: "/assets/apple-touch-icon-120x120.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "/assets/apple-touch-icon-76x76.png" },
                { rel: "apple-touch-icon-precomposed", sizes: "152x152", href: "/assets/apple-touch-icon-152x152.png" },
                { rel: "icon", type: "image/png", href: "/assets/favicon-196x196.png", sizes: "196x196" },
                { rel: "icon", type: "image/png", href: "/assets/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/png", href: "/assets/favicon-32x32.png", sizes: "32x32" },
                { rel: "icon", type: "image/png", href: "/assets/favicon-16x16.png", sizes: "16x16" },
                { rel: "icon", type: "image/png", href: "/assets/favicon-128.png", sizes: "128x128" },
                { rel: "mask-icon", href: "/assets/android-chrome-512x512.png", color: "#4B86B4" }
            ],
            script: [
                // Extension polyfill
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
