// Constructor always as a key: value object
// Example
// "author": "Ian Mihura"

// Project
export class Pr {
    id : string;
    author : string;
    title : string;

    para : Para[];

    constructor(params: any) {
        this.id = params.id;
        this.author = params.author;
        this.title = params.title;
        this.para = params.para;
    }
}

// File
export class Para {
    id : string;
    author : string;
    name : string;
    
    paragraphos : Paragrapho[];

    constructor(params: any) {
        this.id = params.id;
        this.author = params.author;
        this.name = params.name;
        this.paragraphos = params.paragraphos;
    }
}

// Section / paragraph
export class Paragrapho {
    title : string;
    author : string;    
    text : string;
    tags : string[];
    
    constructor(params: any) {
        this.title = params.title ? params.title : "";
        this.author = params.author ? params.author : "";
        this.text = params.text ? params.text : "";
        this.tags = params.tags ? params.tags : [];
    }
}
