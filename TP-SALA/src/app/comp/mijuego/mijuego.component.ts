import { Component, OnInit } from '@angular/core';
import { JuegoMijuego } from '../../clases/juego-mijuego';
import { JuegoServiceService } from "./../../servicios/juego-service.service";
import { Data } from '../../clases/data';

@Component({
  selector: 'app-mijuego',
  templateUrl: './mijuego.component.html',
  styleUrls: ['./mijuego.component.css']
})
export class MijuegoComponent implements OnInit {

  nuevoJuego: JuegoMijuego;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  ocultarComenzar:boolean;
  mensaje : string;
  repetidor:any;
  Tiempo:number;
  data:Data;
  imagen:string;
  perdio:boolean;

  constructor(public mihttp:JuegoServiceService) {
    this.nuevoJuego = new JuegoMijuego(); 
    this.ocultarVerificar=true;
    this.ocultarComenzar=false;
    this.Tiempo=15;

    this.data=new Data(); 
    this.data.mail=localStorage.getItem("usuario");
    this.data.juego="mijuego";
   }

   generarPalabra() {
    this.nuevoJuego.asignarPalabra();
    this.contador=0;
    //this.ocultarVerificar = false;
    this.nuevoJuego.gano = false;
    this.Mensajes = "";
    this.ocultarComenzar=true;
    this.ocultarVerificar=false;
    console.log(this.nuevoJuego.palabra);
    this.imagen="/assets/imagenes/mijuego/"+this.nuevoJuego.imagen;
    //console.log(this.imagen);
    this.repetidor = setInterval(()=>{ 
       
       this.Tiempo--;
       //console.log("llego", this.Tiempo);
       if(this.Tiempo==0 ) {
         clearInterval(this.repetidor);
         this.verificar();
         //this.ocultarComenzar=false;
         //this.ocultarVerificar=true;
         this.Tiempo=15;
       }
       }, 900);

  }

  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;

    if (this.nuevoJuego.verificar()){
      this.MostarMensaje("FELICITACIONES!!!",true);
      this.data.gpe=1;
      this.perdio=false;
    }
    else
    {
      this.perdio=true;
      this.data.gpe=0;
      this.mensaje = "Ooops, casi lo lograste!";
      this.MostarMensaje(this.mensaje); 

    }
    console.info("Gano: ",this.nuevoJuego.gano);  
    this.ocultarComenzar=false;

    //this.ocultarVerificar=true;
    clearInterval(this.repetidor);
    this.Tiempo=15; 
    this.mihttp.Archivar(this.data).subscribe(data=>console.log(data));
  }  

  MostarMensaje(mensaje:string,gano:boolean=false) {
    this.Mensajes = mensaje;    
    var x = document.getElementById("msj");
    if(gano)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }

   /* var modelo = this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=true;
     }, 3000);
    console.info("objeto",x);*/
  
   }  

  


  ngOnInit() {
  }

}
