import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CSSComponent {
  @Output() 
  myOutput:EventEmitter<string>= new EventEmitter(); 

data:string = '0'

// htags = ['h1','h2','h3','h4','h5','h6']

topic : number = 0

// activeHtag = 0

sendValues(){  

  console.log(this.data)
  this.myOutput.emit(this.data);  
}  

colorTopic(){
  this.topic = 1
}

// htagEffect(val:any){
//   this.activeHtag = val
// }

bgcolorTopic(){
  this.topic = 2
}
}
