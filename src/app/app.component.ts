import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'something',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  concept : number = 0

  GetChildData(data:any){

    this.concept = Number(data)
    console.log(data)
  }

  htmlConcept(){
    this.concept = 1
  }

  cssConcept(){
    this.concept = 2
  }

  jsConcept(){
    this.concept = 3
  }

  angularConcept(){
    this.concept = 4
  }

  
  } 
  
    

  
