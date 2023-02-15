import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {


  topic : any = 0

  eleVal ="test"
  arraySize = 0

  state : any =0

  array:any

  topics(){
    this.topic = 1
  }

  setArraySize(val:any){
    this.arraySize = Number(val)
  }

  test:any 
  check:boolean =true
  createArray(){
    this.array = new Array(this.arraySize)

    this.state = 1

    
  }
  
  addElement(index:any){
    this.test = (<HTMLInputElement>document.getElementById("arrayEle_"+index)).value

    this.array[index] = this.test
console.log(this.array)

for (let index = 0; index < this.array.length; index++) {
  if(this.array[index] == null){
    this.check=false
  }else{
    this.check=true
  }
  
}
if(this.check){
this.state=2
}
  }

  displayToString: boolean = false
  displayReverse: boolean = false
  displaySort:boolean = false
  displayPush:boolean = false
  displayPop:boolean = false
 
 
  toString(){
    this.displayReverse = false
    this.displaySort =false
    this.displayPush=false
    this.displayPop = false

    this.displayToString = true
  }

  sort(){

    this.displaySort =true
    this.displayPush=false
    this.displayPop = false

    this.displayReverse = false

    this.displayToString = false

  }

  reverse(){
    this.displayToString = false
    this.displaySort =false
    this.displayPush=false
    this.displayPop = false


    this.displayReverse = true

  }

  join(){
    
  }

  pop(){
    this.displayPop = true

  }

  push(){
    this.displayPop = false

    this.displayPush=true

    
  }

  pushElement(){

   this.array.push((<HTMLInputElement>document.getElementById("pushingEle")).value)


  }

  shift(){
    
  }

}
