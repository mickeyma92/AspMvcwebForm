import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  avisos:string[]=['aviso 1','aviso 2','aviso 3'];
  texto:string;
  mostrarMensaje(event){
    this.texto  =event+" marcado como leido";
  }
  constructor() { }

  ngOnInit() {
  }

}
