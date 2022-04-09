document.addEventListener("DOMContentLoaded", () => {
    let overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;
      setTimeout(function () {
        overlay.style.display = "none";
      }, 1200);
});
