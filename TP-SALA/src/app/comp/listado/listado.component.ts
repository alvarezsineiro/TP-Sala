import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { Jugador } from './../../clases/jugador';
import { JuegoServiceService } from "./../../servicios/juego-service.service";
import { Observable } from "rxjs/Observable";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  jugadores: Array<Jugador>;
  constructor(public mihttp:JuegoServiceService) { }

  items: MenuItem[];
  activeItem: MenuItem;
  flag:boolean;
  //this.respuesta=this.miServicioJugador.Entrar(this.nuevoJugador);
  //this.respuesta.subscribe(data =>this.controlar(data))

  ngOnInit() {
      this.items = [
          {label: 'Anagrama',command:(onclick)=> {this.restojuegos("anagrama")}},
          {label: 'Adivina el numero',command:(onclick)=> {this.restojuegos("adivina")}},
          {label: 'Piedra Papel o Tijera',command:(onclick)=> {this.piedrapapeltijera()}},
          {label: 'Agilidad Aritmetica',command:(onclick)=> {this.restojuegos("agilidad")}},
          {label: '4 Imagenes 1 Palabra',command:(onclick)=> {this.restojuegos("mijuego")}}
      ];
    this.restojuegos("anagrama");
  }

  piedrapapeltijera()
  {
    this.mihttp.TraerListado("piedrapapeltijera").subscribe(data=>
        //console.log(data)
        this.jugadores=data
      );
      this.flag=true;
  }
  restojuegos($data)
  {
    this.mihttp.TraerListado($data).subscribe(data=>
      //console.log(data)
      this.jugadores=data
    );
    this.flag=false;
  }
  
}
