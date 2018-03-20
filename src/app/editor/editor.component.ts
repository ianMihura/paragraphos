import { Component } from "@angular/core";
import { RootService } from "../back/root.service";
import { MatDialog } from "@angular/material"

import { Model } from "../back/model"
import { Pr, Para, Paragrapho } from "../back/templates"
import { Cursor } from "../utils/cursor"
import { KeyBind } from '../utils/keybind'

import { DialogPrompt } from "../dialogs/prompt.component";
import { DialogConfirm } from "../dialogs/confirm.component";

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    providers: [ RootService ]
})

export class EditorComponent {
    title = "Paragraphos";
    cursor: Cursor;
    pr: Pr;

    constructor(private rootService: RootService
        , public dialog: MatDialog) { }    

    getData(): void {
        Model.pr = this.rootService.getMockData();

        this.cursor = Model.cursor
        this.pr = Model.pr;
    }

    ngOnInit(): void {
        this.getData();
    }

    globalKeypress(event: any): void {
        Model.cursor.char = event.currentTarget.selectionStart;
        KeyBind.keypress(event, EditorComponent);
    }

    changeFile(index: number): void {
        Model.cursor.para = index;
    }

    //TODO : add dialogs for settings
    showDetails(): void {
        this.dialog.open(DialogConfirm, {
            data: {
                title: "Details",
                text: [
                    "Project name: " + Model.pr.title,
                    "Project author: " + Model.pr.author,
                    "File name: " + Model.getCurrentPara().name
                ],
                btns: [
                    {text: "Close", value: false}
                ]
            }
        });
    }

    changeFileName(): void {
        this.dialog.open(DialogPrompt, {
            data: {
                title: "Change File Name",
                text: "",
                value: Model.getCurrentPara().name
            }
        }).afterClosed().subscribe((result) => {
            if (result)
                Model.getCurrentPara().name = result;
        });
    }

    // Dynamic height of textareas
    ngAfterViewChecked(): void {
        EditorComponent.adjustHeight();
    }

    static adjustHeight(): void{
        let textareas = document.getElementsByTagName('textarea');

        for (let i = 0; i < textareas.length; i++){
            let input = textareas[Number(i)];

            input.style.height = '0px';
            input.style.height = input.scrollHeight + 'px';
        }
    }

    // For mantaining focus on paragrapho when rearanging paragraphos
    focus(index: number): void {
        Model.cursor.paragrapho = index;
    }

    static setFocus(index: number): void {
        setTimeout( function() {
            document.getElementById("textarea_" + index).focus();
        });
    }
}