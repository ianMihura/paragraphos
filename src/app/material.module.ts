import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule, 
    MatMenuModule,
    MatListModule,
    MatIconModule
} from '@angular/material';

const Materials = [
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
];

// IMPORTANT : Don't forget to add the new imported module in both places !

@NgModule({
    imports: Materials,
    exports: Materials,
})
export class MaterialModule { }
