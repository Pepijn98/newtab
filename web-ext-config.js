module.exports = {
    ignoreFiles: ["example_data.md", "README.md", "dist", ".vscode", ".git", ".gitignore", "web-ext-config.js", ".env", "bin"],
    artifactsDir: "dist",
    build: {
        overwriteDest: true
    },
    run: {
        firefox: "firefoxdeveloperedition"
    }
};
