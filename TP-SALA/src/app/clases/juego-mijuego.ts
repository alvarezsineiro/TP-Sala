import  { Juego } from '../clases/juego';
export class JuegoMijuego extends Juego{

    respuestaIngresada : string;
    respuesta : string;
    imagen="";
    palabra="";
    palabraIngresada="";

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super(" Mijuego ",gano,jugador);
    }

    arrayDePalabras : Array <any >= [
        { imagen:"Arco.jpg",palabra:"arco" },
        { imagen:"Baboso.jpg",palabra:"baboso" },
        { imagen:"Cajas.jpg",palabra:"cajas" },
        { imagen:"Charco.jpg",palabra:"charco" },
        { imagen:"Crema.jpg",palabra:"crema" },
        { imagen:"Faro.jpg",palabra:"faro" },
        { imagen:"Gallardo.jpg",palabra:"gallardo" },
        { imagen:"Gatito.jpg",palabra:"gatito" },
        { imagen:"Infantil.jpg",palabra:"infantil" },
        { imagen:"Pristino.jpg",palabra:"pristino" },
        { imagen:"Tarea.jpg",palabra:"tarea" },
        { imagen:"Terapeuta.jpg",palabra:"terapeuta" },
        { imagen:"Terneros.jpg",palabra:"terneros" }

    ];

    public asignarPalabra() {       
        let indice;
        indice =Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["palabra"]);
        this.palabra=this.arrayDePalabras[indice]["palabra"];
        this.imagen=this.arrayDePalabras[indice]["imagen"];
    }

    public verificar() {
        if (this.palabraIngresada.toLowerCase() == this.palabra ) 
        {
          this.gano = true;
          this.palabra="";
          this.imagen="";
          this.palabraIngresada=""; 
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }



}
