window.addEventListener("DOMContentLoaded", () => {
    let body = document.getElementsByTagName("body")[0];
    let section = document.getElementById("section");
    if (body.scrollHeight > body.clientHeight) {
        section.style = "";
    } else {
        section.style.display = "flex";
        section.style.justifyContent = "center";
        section.style.alignItems = "center";
        section.style.height = "100%";
    }
});

window.addEventListener("resize", () => {
    let body = document.getElementsByTagName("body")[0];
    let section = document.getElementById("section");
    if (body.scrollHeight > body.clientHeight) {
        section.style = "";
    } else {
        section.style.display = "flex";
        section.style.justifyContent = "center";
        section.style.alignItems = "center";
        section.style.height = "100%";
    }
});
