/** Open url in current window */
function onClick(url) {
    window.location.href = url;
}

/** Prevent middle mouse click scroll */
function mouseDown(e) {
    if (e.which === 2) {
        e.preventDefault();
    }
}

/** Open url in new window */
function mouseUp(e, url) {
    if (e.which === 2) {
        e.preventDefault();
        window.open(url, "_blank");
    }
}

/* 1st row */
let youtube = document.getElementById("youtube-btn");
youtube.addEventListener("click", () => onClick("https://youtube.com/"));
youtube.addEventListener("mousedown", mouseDown);
youtube.addEventListener("mouseup", (e) => mouseUp(e, "https://youtube.com/"));

let twitch = document.getElementById("twitch-btn");
twitch.addEventListener("click", () => onClick("https://twitch.tv/directory/following/live"));
twitch.addEventListener("mousedown", mouseDown);
twitch.addEventListener("auxclick", (e) => mouseUp(e, "https://twitch.tv/directory/following/live"));

let twitter = document.getElementById("twitter-btn");
twitter.addEventListener("click", () => onClick("https://twitter.com"));
twitter.addEventListener("mousedown", mouseDown);
twitter.addEventListener("auxclick", (e) => mouseUp(e, "https://twitter.com"));

let reddit = document.getElementById("reddit-btn");
reddit.addEventListener("click", () => onClick("https://reddit.com"));
reddit.addEventListener("mousedown", mouseDown);
reddit.addEventListener("auxclick", (e) => mouseUp(e, "https://reddit.com"));

/* 2nd row */
let nyaa = document.getElementById("nyaa-btn");
nyaa.addEventListener("click", () => onClick("https://nyaa.iss.ink/"));
nyaa.addEventListener("mousedown", mouseDown);
nyaa.addEventListener("auxclick", (e) => mouseUp(e, "https://nyaa.iss.ink/"));

let livechart = document.getElementById("livechart-btn");
livechart.addEventListener("click", () => onClick("https://livechart.me/"));
livechart.addEventListener("mousedown", mouseDown);
livechart.addEventListener("auxclick", (e) => mouseUp(e, "https://livechart.me/"));

let anilist = document.getElementById("anilist-btn");
anilist.addEventListener("click", () => onClick("https://anilist.co/home"));
anilist.addEventListener("mousedown", mouseDown);
anilist.addEventListener("auxclick", (e) => mouseUp(e, "https://anilist.co/home"));

let subsplease = document.getElementById("subsplease-btn");
subsplease.addEventListener("click", () => onClick("https://subsplease.org/"));
subsplease.addEventListener("mousedown", mouseDown);
subsplease.addEventListener("auxclick", (e) => mouseUp(e, "https://subsplease.org/"));

/* 3rd row */
let github = document.getElementById("github-btn");
github.addEventListener("click", () => onClick("https://github.com/"));
github.addEventListener("mousedown", mouseDown);
github.addEventListener("auxclick", (e) => mouseUp(e, "https://github.com/"));

let stackoverflow = document.getElementById("stackoverflow-btn");
stackoverflow.addEventListener("click", () => onClick("https://stackoverflow.com/"));
stackoverflow.addEventListener("mousedown", mouseDown);
stackoverflow.addEventListener("auxclick", (e) => mouseUp(e, "https://stackoverflow.com/"));

let dev = document.getElementById("dev-btn");
dev.addEventListener("click", () => onClick("https://dev.to/"));
dev.addEventListener("mousedown", mouseDown);
dev.addEventListener("auxclick", (e) => mouseUp(e, "https://dev.to/"));

let nvidia = document.getElementById("nvidia-btn");
nvidia.addEventListener("click", () => onClick("https://play.geforcenow.com/mall/#/layout/games"));
nvidia.addEventListener("mousedown", mouseDown);
nvidia.addEventListener("auxclick", (e) => mouseUp(e, "https://play.geforcenow.com/mall/#/layout/games"));