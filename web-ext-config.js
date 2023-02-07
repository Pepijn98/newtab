module.exports = {
    ignoreFiles: [
        ".git",
        ".nuxt",
        ".vscode",
        "bin",
        "node_modules",
        "pages",
        "pkg",
        "public",
        ".env",
        ".gitignore",
        ".npmrc",
        "example_data.md",
        "nuxt.config.ts",
        "package.json",
        "README.md",
        "tsconfig.json",
        "web-ext-config.js",
        "yarn.lock"
    ],
    artifactsDir: "pkg",
    build: {
        overwriteDest: true
    },
    run: {
        firefox: "firefox"
    }
};
