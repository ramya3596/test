import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
  @ViewChild('margin')
  margin!: ElementRef;
marginpx:any = 0

marginTopic(){
  this.topic = 3

  // this.margin = <HTMLElement>(document.getElementById("marginButton"))
  // this.margin = this.marginpx+"px"
  
  console.log(this.margin)
  console.log(this.margin)
  
}

marginIncrement(){
  this.marginpx++
  this.margin.nativeElement.style.margin = this.marginpx+"px"
  console.log(this.margin)
  console.log(this.marginpx)
}

marginDecrement(){
  this.marginpx--
  console.log(this.margin)
  console.log(this.marginpx)
}


goBack(){
  this.topic = 0
}
}
