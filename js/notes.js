window.addEventListener("DOMContentLoaded", async () => {
    const mdNotes = document.getElementById("md-notes");
    const notes = document.getElementById("notes");
    const btnEdit = document.getElementById("btn-edit");
    const btnSave = document.getElementById("btn-save");

    if (mdNotes && notes && btnEdit && btnSave) {
        const md = (await chrome.storage.local.get("notes"))?.notes ?? "";
        const html = marked.parse(md);
        const sanitized = DOMPurify.sanitize(html);
        mdNotes.innerHTML = sanitized;

        notes.addEventListener("keydown", function (e) {
            if (e.key == "Tab") {
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;

                // set textarea value to: text before caret + tab + text after caret
                this.value = this.value.substring(0, start) + "    " + this.value.substring(end);

                // put caret at right position again
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });

        btnEdit.addEventListener("click", async () => {
            notes.value = (await chrome.storage.local.get("notes"))?.notes ?? "";

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
            chrome.storage.local.set({ notes: notes.value });

            notes.style.display = "none";
            mdNotes.style.display = "";
            btnEdit.style.display = "";
            btnSave.style.display = "none";
        });
    }
});
