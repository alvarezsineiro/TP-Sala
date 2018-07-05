import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import {Subscription} from "rxjs";
import { Data } from '../../clases/data';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { JuegoServiceService } from "./../../servicios/juego-service.service";
@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {

  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  numeroUno:number;
  numeroDos:any;
  operador:number;
  eloperador:any;
  repetidor:any;
  resultado:number;
  numeroIngresado:number;
  data:Data;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor(public mihttp:JuegoServiceService) {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad"); 
    //this.completarnumeros(); 

    this.data=new Data(); 
    this.data.mail=localStorage.getItem("usuario");
    this.data.juego="agilidad";
    
  }
  NuevoJuego() {
    this.numeroIngresado=null;
    this.nuevoJuego=new JuegoAgilidad();
    this.completarnumeros();
    this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);


  }
completarnumeros(){
  this.nuevoJuego.generarNumeros();
  
  this.nuevoJuego.gano=false;
  this.nuevoJuego.perdio=false;

}

  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
   this.nuevoJuego.numeroingresado=this.numeroIngresado;
    if(this.nuevoJuego.verificar()){
     // this.nuevoJuego.gano=true 
     this.data.gpe=1;
    }
  
  
    else {
      this.nuevoJuego.perdio=true; 
      this.data.gpe=0;
     }
    console.log("Respuesta Incorrecta! El resultado es: "+this.nuevoJuego.resultado);
    //this.numeroIngresado=null;
    this.ocultarVerificar=true;
    clearInterval(this.repetidor);
    this.Tiempo=5; 
    
    this.enviarJuego.emit(this.nuevoJuego);

    this.mihttp.Archivar(this.data).subscribe(data=>console.log(data));

}

}
