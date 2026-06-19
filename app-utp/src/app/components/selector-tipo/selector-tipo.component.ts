import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selector-tipo',
  templateUrl: './selector-tipo.component.html',
  styleUrls: ['./selector-tipo.component.scss'],
  standalone: false
})
export class SelectorTipoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  @Output() tipoCambiado = new EventEmitter<string>();
  elegir(tipo: string) {
    this.tipoCambiado.emit(tipo);
  }
}
