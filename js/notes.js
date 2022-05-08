window.addEventListener("load", () => {
    const notes = document.getElementById("notes");
    const editBtn = document.getElementById("btn-edit");
    const saveBtn = document.getElementById("btn-save");

    if (notes && editBtn && saveBtn) {
        notes.value = localStorage.getItem("notes") || "";

        editBtn.addEventListener("click", () => {
            notes.disabled = false;
            editBtn.style.display = "none";
            saveBtn.style.display = "";
        });

        saveBtn.addEventListener("click", () => {
            notes.disabled = true;
            editBtn.style.display = "";
            saveBtn.style.display = "none";
            localStorage.setItem("notes", notes.value);
        });
    }
});
