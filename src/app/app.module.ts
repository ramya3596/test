import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PracticeComponent } from './practice/practice.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent
    
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
