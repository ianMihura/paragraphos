import { Injectable } from '@angular/core';

import { Pr, Para, Paragrapho } from './templates';
import { PR } from './mock-pr';
import { Helpers } from './helpers'

@Injectable()
export class RootService {
    getMockData(): Pr {
        return this.parsePr(PR);
    }

    //TODO: error handle
    parsePr(data: any): Pr {
        return new Pr({
            id: data.id ? data.id : Helpers.generateId(),
            author: data.author ? data.author : "",
            title: data.title ? data.title : "",
            para: data.para ? data.para.map((para) => {
                return new Para({
                    id: para.id ? para.id : Helpers.generateId(),
                    author: para.author ? para.author : "",
                    name: para.name ? para.name : "unknown name",
                    paragraphos: para.paragraphos ? para.paragraphos.map((paragrapho) => {
                        return new Paragrapho({
                            text: paragrapho.text,
                            tags: paragrapho.tags
                        })
                    }) : []
                })
            }) : []
        });
    }
}
