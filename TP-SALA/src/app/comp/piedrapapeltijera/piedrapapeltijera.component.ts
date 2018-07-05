import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from "./../../servicios/juego-service.service";
import { Data } from '../../clases/data';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {

  eleccionMaquina:any="piedra";
   ContadorDeEmpates:any=0;
   ContadorDeGanadas:any=1;
   ContadorDePerdidas:any=0;
   numeroSecreto:any=1;
   eleccionHumano:any;
   jugar:boolean;
   yajugo:boolean=false;
   Mensaje:string="";
   data:Data;
  constructor(public mihttp:JuegoServiceService) { 
    this.comenzar;
    this.jugar=true;
    console.log(this.yajugo);

    this.data=new Data(); 
    this.data.mail=localStorage.getItem("usuario");
    this.data.juego="piedrapapeltijera";
  }

  ngOnInit() {
  }

   comenzar()
  {
    //Genero el número RANDOM entre 1 y 3
    this.yajugo=false;
       this.numeroSecreto =Math.floor( Math.random()*3)+1;
      //alert(numeroSecreto);
      switch(this.numeroSecreto)
      {
        case 1:
          this.eleccionMaquina="piedra";
          break;
        case 2:
          this.eleccionMaquina="papel";
          break;
        case 3:
          this.eleccionMaquina="tijera";
          break;
  
      }
      //alert(eleccionMaquina);
  
  
      console.log(this.eleccionMaquina);
  }//FIN DE LA FUNCIÓN
   piedra()
  {
    this.yajugo=true;
    //console.log("jhjkhkj");
   // alert("la maquina selecciono: "+this.eleccionMaquina);
    this.eleccionHumano="piedra";
    if(this.eleccionHumano==this.eleccionMaquina)
    {
      this.Mensaje="Empate!!"
      //alert("empate.");	
      this.ContadorDeEmpates++;	
      this.data.gpe=2;
    }
    else if(this.eleccionMaquina=="tijera")
    {
     // alert("vos ganastes.");
     this.Mensaje="Vos ganaste!!"
      this.ContadorDeGanadas++;
      this.data.gpe=1;
    }
    else
    {
     // alert("ganó la Maquina.");
     this.Mensaje="Gano la maquina!"
      this.ContadorDePerdidas++;
      this.data.gpe=0;
    }
  
 //this. mostarResultado();
 this.mihttp.Archivar(this.data).subscribe(data=>console.log(data));
  }//FIN DE LA FUNCIÓN
   papel()
  {
    this.yajugo=true;
    //console.log("jhjkhkj");
   // alert("la maquina selecciono: "+this.eleccionMaquina);
    this.eleccionHumano="papel";
    if(this.eleccionHumano==this.eleccionMaquina)
    {
      this.Mensaje="Empate!!"
      //alert("empate.");	
      this.ContadorDeEmpates++;	
      this.data.gpe=2;
    }
    else if(this.eleccionMaquina=="piedra")
    {
     // alert("vos ganastes.");
     this.Mensaje="Vos ganaste!!"
      this.ContadorDeGanadas++;
      this.data.gpe=1;
    }
    else
    {
     // alert("ganó la Maquina.");
     this.Mensaje="Gano la maquina!"
      this.ContadorDePerdidas++;
      this.data.gpe=0;
    }
    this.mihttp.Archivar(this.data).subscribe(data=>console.log(data));
  }//FIN DE LA FUNCIÓN
   tijera()
  {
    this.yajugo=true;
    //console.log("jhjkhkj");
   // alert("la maquina selecciono: "+this.eleccionMaquina);
    this.eleccionHumano="tijera";
    if(this.eleccionHumano==this.eleccionMaquina)
    {
      this.Mensaje="Empate!!"
      //alert("empate.");	
      this.ContadorDeEmpates++;	
      this.data.gpe=2;
    }
    else if(this.eleccionMaquina=="papel")
    {
     // alert("vos ganastes.");
     this.Mensaje="Vos ganaste!!"
      this.ContadorDeGanadas++;
      this.data.gpe=1;
    }
    else
    {
     // alert("ganó la Maquina.");
     this.Mensaje="Gano la maquina!"
      this.ContadorDePerdidas++;
      this.data.gpe=0;
    }
    this.mihttp.Archivar(this.data).subscribe(data=>console.log(data));
  }//FIN DE LA FUNCIÓN
  
   mostarResultado()
  {
  
  //document.getElementById('empatadas').=this.ContadorDeEmpates + " partidas empatadas.";
  //document.getElementById('perdidas').value=this.ContadorDePerdidas + " partidas perdidas.";
  //document.getElementById('ganadas').value=this.ContadorDeGanadas + " partidas ganadas.";
  
  this.comenzar();
  }

}
