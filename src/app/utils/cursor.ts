export class Cursor {
    constructor(para: number = 0, paragrapho: number = 0, char: number = 0) {
        this.para = para;
        this.paragrapho = paragrapho;
        this.char = char;
    };

    para: number;
    paragrapho: number;
    char: number;
}
