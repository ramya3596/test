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
  value:any
  arr:any

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

  displayArray =[false,false,false,false,false]

  displayNamesArray = ["toString","sort","reverse","pop","push"]

  // displayMap = {
  //   "displayToString":false,
  //   "displayReverse" : false
  // }

  // displayToString: boolean = false
  // displayReverse: boolean = false
  // displaySort:boolean = false
  // displayPush:boolean = false
  // displayPop:boolean = false
 
 
  // toString(){
  //  for (let index = 0; index < this.displayArray.length; index++) {
    
  //   if(index == 0){
  //     this.displayArray[index] = true
  //   }else{
  //     this.displayArray[index] = false

  //   }
    
  //  }
  // }

  // sort(){

  //   for (let index = 0; index < this.displayArray.length; index++) {
    
  //     if(index == 1){
  //       this.displayArray[index] = true
  //     }else{
  //       this.displayArray[index] = false
  
  //     }
      
  //    }

  // }

  // reverse(){
  //   for (let index = 0; index < this.displayArray.length; index++) {
    
  //     if(index == 2){
  //       this.displayArray[index] = true
  //     }else{
  //       this.displayArray[index] = false
  
  //     }
      
  //    }

  // }

  // join(){
    
  // }

  // pop(){
  //   for (let index = 0; index < this.displayArray.length; index++) {
    
  //     if(index == 3){
  //       this.displayArray[index] = true
  //     }else{
  //       this.displayArray[index] = false
  
  //     }
      
  //    }

  // }

  // push(){
  //   for (let index = 0; index < this.displayArray.length; index++) {
    
  //     if(index == 4){
  //       this.displayArray[index] = true
  //     }else{
  //       this.displayArray[index] = false
  
  //     }
      
  //    }

    
  // }

  pushElement(){

   this.array.push((<HTMLInputElement>document.getElementById("pushingEle")).value)


  }

  shift(){
    
  }



  commonMethodToDisplay(val:any){
    for (let index = 0; index < this.displayArray.length; index++) {
    
      if(index == val){
        this.displayArray[index] = true
      }else{
        this.displayArray[index] = false
  
      }
       if(val==1){

        this.value=[2,7,21,35,6]
        for(let index=1;index<this.value.length;index++){
          for(let count=0;count<index;count++){
            if(this.value[index] <this.value[count]){
              this.arr=this.value[index]
              this.value[index]=this.value[count]
              this.value[count]=this.arr
              
            }
          }
        }

      this.array=this.value
       
         
         }
      }
      
     }

  }


