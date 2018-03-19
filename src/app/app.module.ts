import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Import other Material modules
import { MaterialModule } from './material.module';

// Import Service
import { RootService } from "./back/root.service";

// Import all created components
import { EditorComponent } from "./editor/editor.component";


@NgModule({
  // Global Modules
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  
  // Created Components
  declarations: [
    EditorComponent
  ],

  // Dynamically added components
  entryComponents: [

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
