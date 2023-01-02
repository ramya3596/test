import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
 @Input()

 public value!:number;
  
 colorArr =["red","blue","green","yellow","pink","purple","orange","aqua"]

 constructor() { }


  
}
