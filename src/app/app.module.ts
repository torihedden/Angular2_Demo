import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// Defines AppModule, the root module that tells Angular how to assemble the application.
// It declares the AppComponent. -> import { AppComponent }  from './app.component';
