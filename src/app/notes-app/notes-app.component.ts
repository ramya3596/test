import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.css']
})
export class NotesAppComponent {


  notesData = [{name : "notes1",
                data : "sample data of notes 1"},
                {name : "notes2",
                data : "sample data of notes 2"}]


  selected = 0

  createNewNotes(){

    let notesName  = prompt("Enter new Notes name :")

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
      this.notesData.push(
        {name: notesName,data:" "}
        
        )
      }
  }

  chooseNotes(value:any){
    this.selected = value + 1
  }

      changeData(value:any, changedData:any){
          this.notesData[value].data = changedData
      }          
}
