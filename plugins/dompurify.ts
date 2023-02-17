import dompurify from "dompurify";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            dompurify
        }
    }
});
