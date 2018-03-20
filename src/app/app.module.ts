import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Import other Material modules
import { MaterialModule } from './material.module';

// Import Service
import { RootService } from "./back/root.service";

// Import all created components
import { EditorComponent } from "./editor/editor.component";

// Import all dialogs
import { DialogConfirm } from "./dialogs/confirm.component";
import { DialogPrompt } from "./dialogs/prompt.component";
import { DialogSettings } from "./dialogs/settings.component";

@NgModule({
  // Global Modules
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    HttpModule
  ],
  
  // Created Components
  declarations: [
    EditorComponent,

    DialogConfirm,
    DialogPrompt,
    DialogSettings
  ],

  // TODO popups : dialogues
  // Dynamically added components
  entryComponents: [
    DialogConfirm,
    DialogPrompt,
    DialogSettings
  ],

  // Services
  providers: [
    RootService
  ],

  // Entry Point
  // TODO : might add a login or welcome screen
  bootstrap: [ EditorComponent ]
})

export class AppModule { }
