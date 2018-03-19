import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule, 
    MatMenuModule
} from '@angular/material';

const Materials = [
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule
];

// IMPORTANT : Don't forget to add the new imported module in both places !

@NgModule({
    imports: Materials,
    exports: Materials,
})
export class MaterialModule { }
