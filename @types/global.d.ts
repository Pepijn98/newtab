export { };
declare global {
    interface Marked {
        parse(md: string): string;
        [x: string]: unknown;
    }

    interface DOMPurify {
        sanitize(html: string): string;
        [x: string]: unknown;
    }

    var marked: Marked;
    var DOMPurify: DOMPurify;
}
