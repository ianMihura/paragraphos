import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

// the data structure it likes
//     title
//     text
//     btns[]
//         text
//         value

@Component({
    selector: '', // 'confirm'
    templateUrl: './confirm.component.html',
    styleUrls: ['./dialog.component.css']
})

export class DialogConfirm {
    constructor(
        public dialogRef: MatDialogRef<DialogConfirm>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
}
