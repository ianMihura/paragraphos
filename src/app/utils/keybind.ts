import { Model } from "../back/model";
import { Move } from "./move";
export class KeyBind {

    static commands = {
        // command: fnAction
        "alt+delete": function() {
            Model.deletePara()
        },
        "alt+enter": function() {
            Model.addPara();
        },

        "ctrl+tab": function(context: any) {
            context.changeFile(Model.cursor.para+1);
        },
        "ctrl+shift+tab": function(context: any) {
            context.changeFile(Model.cursor.para-1);
        },

        "ctrl+enter": function() {
            Model.addParagrapho();
        },
        "ctrl+delete": function() {
            Model.deleteParagrapho();
        },

        "alt+arrowdown": function(context: any) {
            Move.movedown();
            context.setFocus( Model.cursor.paragrapho );
        },
        "alt+arrowup": function(context: any) {
            Move.moveup();            
            context.setFocus( Model.cursor.paragrapho );
        },
    };

    /**
     * newCommands: Object
     *   command: fnAction
     */
    //TODO make this callable with popup
    static editCommands(newCommands: any): void {
        for (let command in newCommands)
            KeyBind.commands[command] = newCommands[command];
    };

    static keypress(event: any, context: any): void {
        let eventCommand = KeyBind.buildCommand(event);

        for (let command in KeyBind.commands)
            if (command == eventCommand)
                KeyBind.commands[command](context);

        console.log(eventCommand);
    };


    /**
     * event: Object
     *   ctrlKey: Boolean
     *   shiftKey: Boolean
     *   altKey: Boolean
     *   key: string
     */
    static buildCommand(event: any): string {
        let command: string = "";

        if (event.ctrlKey)
            command += "ctrl+";
        if (event.shiftKey)
            command += "shift+";
        if (event.altKey)
            command += "alt+";
        if (event.key)
            command += event.key.toLowerCase();

        return command;
    };
}
