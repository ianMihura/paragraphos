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
    static getAllParagraphos(): Paragrapho[] {
        return Model.getCurrentPara().paragraphos;
    }

    static getCurrentParagrapho(): Paragrapho {
        return Model.getCurrentPara().paragraphos[Model.cursor.paragrapho];
    }

    static getParagrapho(index: number): Paragrapho {
        return Model.getAllParagraphos()[index]
    }
    
    static addParagrapho(paragrapho?: Paragrapho): number {
        return Model.getAllParagraphos().push(
            paragrapho ? paragrapho : Model._getNewParagrapho()
        );
    }
    static _getNewParagrapho(): Paragrapho {
        return new Paragrapho({ "text": "" }) 
    }

    static deleteParagrapho(index: number = Model.cursor.paragrapho): void {
        Model.getAllParagraphos().splice(index, 1);
    }
}