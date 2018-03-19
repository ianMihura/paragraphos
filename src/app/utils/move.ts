import { Model } from "../back/model";
import { Helpers } from "../back/helpers";

export class Move {
    
    //TODO send to another file ?
    static moveup(): void {
        Move._move(-1);
    }
    static movedown(): void {
        Move._move(1);
    }

    static _move(direction: number): void {
        if (!Model.pr.para[Model.cursor.para].paragraphos[Model.cursor.paragrapho + direction])
            return;

        let currentParagraphos = Helpers.clone(
            Model.getAllParagraphos()[Model.cursor.paragrapho]
        );

        Model.pr.para[Model.cursor.para].paragraphos[Model.cursor.paragrapho]
            = Model.pr.para[Model.cursor.para].paragraphos[Model.cursor.paragrapho + direction];
        Model.pr.para[Model.cursor.para].paragraphos[Model.cursor.paragrapho + direction]
            = currentParagraphos;

        Model.cursor.paragrapho += direction;
    }
}