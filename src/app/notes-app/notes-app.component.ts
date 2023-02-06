import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HTTPServiceService } from '../httpservice.service';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.css']
})
export class NotesAppComponent implements OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit {

  constructor(private http : HTTPServiceService){
    console.log("it is printed by constructor")
  }

  // @Input() hero!: Hero;
   power = '';
 power2 = '';

 ngAfterViewChecked(){
   alert("You are changing something in the page")
  console.log("after view checked called")
 }

 ngAfterContentInit(){
  console.log("After content init called")
 }

 ngAfterViewInit(){
  console.log("after view init called")
 }



ngDoCheck(){

  console.log("do check called")
}

ngOnChanges(changes: SimpleChanges): void {

  for(const propName in changes){

    console.log(changes)

    const chng = changes[propName];
    console.log(chng)
    const cur  = JSON.stringify(chng.currentValue);
    const prev = JSON.stringify(chng.previousValue);

    if(cur === "vnk" && prev === "vn"){
      console.log("target achieved")
    }

    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  }
  
}

ngOnDestroy(): void {
  alert("do you really want to exit?")
}





 

  notesData = [{name : "notes1",
                data : "sample data of notes 1"},
                {name : "notes2",
                data : "sample data of notes 2"}]


  selected = 0

  changeColor(){
    let id =(<HTMLElement>document.getElementById("loaderStyle"))


    let num = 0
    let constant = 500
    // id.style.border = "10px solid"
    id.style.borderColor = "blue"
    
    id.style.backgroundColor = "red"
    
    
    let loop = setInterval(()=>{
      
      
      num = num + 1
      id.style.marginInlineEnd = ""+(constant-num)+"px"
      id.innerHTML = ""+num

      if(num==500){
        clearInterval(loop)
      }
    },100)


  }
  createNewNotes(update:any,value:any){

    let notesName

    if(update){

     notesName  = prompt("Enter updated name :")
  }else{
     notesName  = prompt("Enter new name :")
  }


    let exists = false

    
    for (let index = 0; index < this.notesData.length; index++) {
        
      if(notesName === this.notesData[index].name){
        exists = true
      }
        
    }
    
    if(exists){
      alert("notes name already exits please enter new name")
        notesName = prompt("Enter new Notes name :")
      }
      
      if(typeof(notesName) === 'string'){
      if(!update){this.notesData.push(
        {name: notesName,data:" "}
        
        )
      }else{this.notesData[value].name=notesName}
      }
  }

  chooseNotes(value:any){
    this.selected = value + 1
  }

      changeData(value:any, changedData:any){
          this.notesData[value].data = changedData
      } 
      
      renameNotes(value:any,changedName:any){
        this.notesData[value].name=changedName

      }
      collectName(value:any){
        return this.createNewNotes(true,value)
      }

      id :any
      deleteNote(index:any){

        // (document.getElementById("name")).style.color = "red"

        
       
      }
}


