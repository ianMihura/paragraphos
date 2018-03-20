import { Component, Inject } from '@angular/core';
import { Settings } from '../settings'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: '', // 'prompt'
    templateUrl: './settings.component.html',
    styleUrls: ['./dialog.component.css']
})

export class DialogSettings {
    settings: Settings;

    constructor(
        public dialogRef: MatDialogRef<DialogSettings>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        this.settings = new Settings();
    }

    apply(): void {
        Settings.apply(this.settings);
    }

    close(): void {
        this.dialogRef.close();
    }
}
