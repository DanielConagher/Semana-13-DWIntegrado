import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen-app',
  templateUrl: './resumen-app.component.html',
  styleUrls: ['./resumen-app.component.scss'],
  standalone: false
})
export class ResumenAppComponent {

  constructor() { }


  @Input() tipo = '';

}
