import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  ports: Port[];
  port: Port;
  selected : any;
  constructor() {
    this.ports = [
      { id: 1, name: 'Angular is running in development mode. Call enableProdMode() to enable production mode.' },
      { id: 2, name: 'Azmath' },
      { id: 3, name: 'Dabu' },
      { id: 4, name: 'vijay' }
    ];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.selected = event.value

    console.log(this.selected)
  }

}
