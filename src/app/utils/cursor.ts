// TODO check if this can be static properties
// then, there would be no need for instantiation in model.ts

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
