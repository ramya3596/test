import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {


  topic: any = 0

  eleVal = "test"
  arraySize = 0

  state: any = 0

  @ViewChildren('myitems') items!: QueryList<ElementRef>


  array: any = []
  strArray: any = []
  value: any
  arr: any
  lastEle: any;

  topics() {
    this.topic = 1
  }

  setArraySize(val: any) {
    this.arraySize = Number(val)
  }

  test: any
  check: boolean = true

  createArray() {
    this.array = new Array(this.arraySize)

    for (let index = 0; index < this.array.length; index++) {
      this.strArray.push(this.array[index])

    }

    this.state = 1



  }

  addElement(val: any) {
    this.test = (<HTMLInputElement>document.getElementById("arrayEle_" + val)).value


    this.array[val] = this.test
    console.log(this.array)

    for (let index = 0; index < this.array.length; index++) {
      if (this.array[index] == null) {
        this.check = false
      } else {
        this.check = true
      }

    }
    if (this.check) {
      this.state = 2
    }
  }

  displayArray = [false, false, false, false, false, false]

  displayNamesArray = ["toString", "sort", "reverse", "pop", "push", "shift"]

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

  pushElement() {

    this.array.push((<HTMLInputElement>document.getElementById("pushingEle")).value)


  }

  // shift(){ 

  // }


  lenvar: any


  index: any = 0
  setIn: any
  commonMethodToDisplay(val: any) {
    if (val == 3) {

      if (this.array.length != 1) {
        this.items.last.nativeElement.firstElementChild.style.color = "red"
        this.items.last.nativeElement.firstElementChild.style.position = "absolute"
        this.items.last.nativeElement.firstElementChild.style.color = "red"

        // for (let index = 0; index < 800; index++) {
        //   this.items.last.nativeElement.firstElementChild.style.marginTop = index+"px"

        // }
        this.index = 0
        this.setIn = setInterval(() => {
          if (this.index < 800) {
            this.items.last.nativeElement.firstElementChild.style.marginTop = this.index + "px"
          }
          else {
            this.items.last.nativeElement.children[1].style.display ="none"

            for (let index = 0; index < this.displayArray.length; index++) {

              if (index == val) {
                this.displayArray[index] = true
              } else {
                this.displayArray[index] = false

              }
            }

            clearInterval(this.setIn)
          }
          this.index++
        }, 2)


      }
      else {
        this.items.last.nativeElement.children[1].style.color = "red"
        this.items.last.nativeElement.children[1].style.position = "absolute"
        this.items.last.nativeElement.children[1].style.color = "red"

        // for (let index = 0; index < 800; index++) {
        //   this.items.last.nativeElement.firstElementChild.style.marginTop = index+"px"

        // }
        this.index = 0
        this.setIn = setInterval(() => {
          if (this.index < 800) {
            this.items.last.nativeElement.children[1].style.marginTop = this.index + "px"
          }
          else {
            this.items.last.nativeElement.children[1].style.display ="none"
            for (let index = 0; index < this.displayArray.length; index++) {

              if (index == val) {
                this.displayArray[index] = true
              } else {
                this.displayArray[index] = false

              }
            }

            clearInterval(this.setIn)
          }
          this.index++
        }, 2)
      }


    }else{

      for (let index = 0; index < this.displayArray.length; index++) {

        if (index == val) {
          this.displayArray[index] = true
        } else {
          this.displayArray[index] = false

        }
        if (val == 1) {

          for (let index = 1; index < this.array.length; index++) {
            for (let count = 0; count < index; count++) {
              if (this.array[index] < this.array[count]) {
                this.arr = this.array[index]
                this.array[index] = this.array[count]
                this.array[count] = this.arr

              }
            }
          }

        }


        if (val == 5) {

        }







      }

    }

  }

}
