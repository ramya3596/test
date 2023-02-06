import { Component } from '@angular/core';

import { Output , EventEmitter} from '@angular/core'

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HTMLComponent {


  @Output() 
  myOutput:EventEmitter<string>= new EventEmitter(); 
  data:string = '0'

  topic : number = 0

  sendValues(){  

    console.log(this.data)
    this.myOutput.emit(this.data);  
 }  

  headingTopic(){
    this.topic = 1
  }

  paragraphTopic(){
    this.topic = 2
  }
}
