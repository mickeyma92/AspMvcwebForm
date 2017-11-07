import { Component, OnInit } from '@angular/core';
import {Alumno} from '../modelos/alumno.model';
@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {
  public alumnos:Array<Alumno>=[
    {id:1,nombre:'Juan',apellidos:'Gutierrez',ciudad:'Juarez'},
    {id:1,nombre:'Pedro',apellidos:'Mendez',ciudad:'Juarez'},
    {id:3,nombre:'Javier',apellidos:'Gutierrez',ciudad:'Veracruz'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
