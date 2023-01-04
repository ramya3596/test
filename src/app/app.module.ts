import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesAppComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
