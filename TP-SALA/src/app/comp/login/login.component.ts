import { Component, OnInit } from '@angular/core';
import {PasswordModule } from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {Validators,FormControl,FormGroup,FormBuilder, EmailValidator} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MenuItem,Message,SelectItem} from 'primeng/api';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Jugador } from './../../clases/jugador';
import { JuegoServiceService } from "./../../servicios/juego-service.service";
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

    respuesta:Observable<any>;
  

    public nuevoJugador: Jugador;
   

    constructor(private fb: FormBuilder,private router: Router,public miServicioJugador: JuegoServiceService) 
    {
        this.nuevoJugador=new Jugador();
    }

    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required,),
            'password': new FormControl('', Validators.compose([Validators.required])),
        });

    
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        

        //console.log(this.userform.value["firstname"]);
        this.nuevoJugador.mail=this.userform.value["firstname"];
        this.nuevoJugador.clave=this.userform.value["password"];
        //this.miServicioJugador.gettodos().subscribe(data =>console.log(data));
        this.respuesta=this.miServicioJugador.Entrar(this.nuevoJugador);
        this.respuesta.subscribe(data =>this.controlar(data))
        
    }
   controlar($data)
   {
        console.log($data);
        if (($data.respuesta=="Jugador no registrado.")||($data.respuesta=="Contraseña erronea"))
        {

            this.msgs.push({severity:'error', summary:'Error', detail:'Usuario o contraseña incorrectos'});
        } 
        else
        {
            localStorage.setItem("usuario",this.nuevoJugador.mail);
            this.router.navigate(['/indice']);
        }
   }

    diagnostic() { return JSON.stringify(this.userform.value); }
}
