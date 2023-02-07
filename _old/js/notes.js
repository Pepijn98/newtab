window.addEventListener("DOMContentLoaded", async () => {
    const mdNotes = document.getElementById("md-notes");
    const notes = document.getElementById("notes");
    const btnEdit = document.getElementById("btn-edit");
    const btnSave = document.getElementById("btn-save");

    if (mdNotes && notes && btnEdit && btnSave) {
        const data = await browser.storage.sync.get();
        const md = data?.notes || "";
        const html = marked.parse(md);
        const sanitized = DOMPurify.sanitize(html);
        mdNotes.innerHTML = sanitized;

        // Add 4 space tab function to textarea
        notes.addEventListener("keydown", function (e) {
            if (e.key == "Tab") {
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;
                this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });

        btnEdit.addEventListener("click", async () => {
            const data = await browser.storage.sync.get();
            notes.value = data?.notes || "";
            notes.style.display = "";
            mdNotes.style.display = "none";
            btnEdit.style.display = "none";
            btnSave.style.display = "";
        });

        btnSave.addEventListener("click", () => {
            const html = marked.parse(notes.value);
            const sanitized = DOMPurify.sanitize(html);
            mdNotes.innerHTML = sanitized;

            localStorage.setItem("notes", notes.value);
            browser.storage.sync.set({ notes: notes.value });

            notes.style.display = "none";
            mdNotes.style.display = "";
            btnEdit.style.display = "";
            btnSave.style.display = "none";
        });
    }
});
