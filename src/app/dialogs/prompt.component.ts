import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

// the data structure it takes
//     title
//     text
//     value

@Component({
    selector: '', // 'prompt'
    templateUrl: './prompt.component.html',
    styleUrls: ['./dialog.component.css']
})

export class DialogPrompt {
    constructor(
        public dialogRef: MatDialogRef<DialogPrompt>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
