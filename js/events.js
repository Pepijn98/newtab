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

var search = document.getElementById("search");
search.addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
        fetch(`${baseUrl}/suggestions?q=${encodeURIComponent(e.target.value)}`, {
            headers: {
                Authorization: btoa(username + ":" + password)
            }
        })
            .then((res) => res.json())
            .then((res) => {
                let list = document.getElementById("suggestions");
                list.innerHTML = "";

                res.data.forEach((item) => {
                    let option = document.createElement("option");
                    option.value = item;
                    list.appendChild(option);
                });
            });
    } else {
        let list = document.getElementById("suggestions");
        list.innerHTML = "";
    }
});

var clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    let list = document.getElementById("suggestions");
    list.innerHTML = "";
});
