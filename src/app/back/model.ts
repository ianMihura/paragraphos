// Executes actions to the db
import { Pr, Para, Paragrapho } from "./templates";
import { Cursor } from "../utils/cursor"
import { Helpers } from "./helpers";
import { RootService } from "./root.service";

// TODO define if we should separate by level
export class Model {
    static pr: Pr;
    static cursor: Cursor = new Cursor(); // TODO: Esto no tiene que hacer aca

    // getAll_ getCurrent_ get_ (specific)
    // add_ (one)
    // deleteCurrent_ delete_ (specific)


    // --------- Pr - Project --------- //
    // TODO define save - db - getData dataFlow
    // TODO define settings
    // static newProject(pr: any): void {
    //     Model.pr;
    // }

    
    // --------- Para - File --------- //
    static getAllPara(): Para[] { 
        return Model.pr.para 
    }
    
    static getCurrentPara(): Para { 
        return Model.pr.para[Model.cursor.para] 
    }

    // TODO how do I fetch: by index or id
    // static getPara(id: string): Para {
    //     return Model.pr.para[id];
    // }
    
    static addPara(para?: Para): void {
        Model.pr.para.push(
            para ? para : Model._getNewPara()
        );
    }
    static _getNewPara(params?: any): Para { 
        return new Para(params ? params : Model._getNewParaParams()) }
    static _getNewParaParams(): any {
        return {
            "id": Helpers.generateId(),
            "author": "", // TODO get author from settings
            "name": "unknown name",
            "paragraphos": new Paragrapho({})
        }
    }

    static deletePara(id: string = Model.getCurrentPara().id): void {
        for(let p in Model.pr.para)
            if (Model.pr.para[p].id == id)
                Model.pr.para.splice(Number(p), 1);
    }

    // --------- Paragrapho - Section --------- //
    // Get all Paragraphos from current Para
    static getAllParagraphos(): Paragrapho[] {
        return Model.getCurrentPara().paragraphos;
    }

    // Get current Paragrapho - current Para
    static getCurrentParagrapho(): Paragrapho {
        return Model.getCurrentPara().paragraphos[Model.cursor.paragrapho];
    }

    // Get specific Paragrapho from current Para
    static getParagrapho(index: number): Paragrapho {
        return Model.getAllParagraphos()[index]
    }
    
    // Add Paragrapho to current Para
    static addParagrapho(paragrapho?: Paragrapho): number {
        return Model.getAllParagraphos().push(
            paragrapho ? paragrapho : Model._getNewParagrapho()
        );
    }
    static _getNewParagrapho(): Paragrapho {
        return new Paragrapho({ "text": "" }) 
    }

    // Delete (current) Paragrapho from current Para
    static deleteParagrapho(index: number = Model.cursor.paragrapho): void {
        Model.getAllParagraphos().splice(index, 1);
    }

    // --------- Tag - Reference --------- //
    // Get all Tags from current Paragrapho
    static getCurrentParagraphoTags(): string[] {
        return Model.getCurrentParagrapho().tags
    }

    // Get all Tags from (current) Para
    static getParaTags(paragraphos: Paragrapho[] = Model.getAllParagraphos()): string[] {
        let tags = [];
        
        for (let index in Model.getAllParagraphos()) {
            tags = tags.concat(Model.getAllParagraphos()[index].tags);
        }

        return tags;
    }

    // Get all Project Tags
    //TODO check why it runs several iterations
    static getProjectTags(): string[] {
        let tags = [];

        for (let index in Model.pr.para) {
            tags = tags.concat(Model.getParaTags(Model.pr.para[index].paragraphos));
        }

        return tags;
    }

    // Add Tag to current Paragrapho
    static addTag(tag: string): void {
        Model.getCurrentParagraphoTags().push(tag);
    }

    // Delete Tag from current Paragrapho
    static deleteTag(index: number, tag: string): void {
        let tags = Model.getCurrentParagraphoTags();
        if (index) {
            tags.splice(index, 1);
        } else {
            for (let j = 0; j < tags.length; j++)
                if (tags[j] == tag)
                    tags.splice(j, 1);
        }
    }


    // TODO finish tags
    // getAll_ getCurrent_ get_ (specific)
    // add_ (one)
    // deleteCurrent_ delete_ (specific)
}