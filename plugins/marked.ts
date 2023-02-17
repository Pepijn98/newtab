import { marked } from "marked";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            marked
        }
    }
});
