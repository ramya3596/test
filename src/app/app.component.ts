import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'something',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title : string="0"


  changeToNotesApp(){
    this.title = "1"
  }

  changeToWeatherApp(){
    this.title = "2"
  }

  } 
  
    

  
