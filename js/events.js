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

// var suggestions = [];
// var search = document.getElementById("search");
// search.addEventListener("keyup", (e) => {
//   if (e.target.value.length >= 3) {
//     fetch("https://google.com/complete/search?client=chrome&q=" + e.target.value, {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Accept": "application/json"
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }
// });