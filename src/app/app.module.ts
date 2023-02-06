import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTMLComponent } from './html/html.component';
import { CSSComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesAppComponent,
    HTMLComponent,
    CSSComponent,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
