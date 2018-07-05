import { Component, OnInit } from '@angular/core';
import {PasswordModule } from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MenuItem,Message,SelectItem} from 'primeng/api';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from './../../clases/jugador';
import { JuegoServiceService } from "./../../servicios/juego-service.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 
  msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

    public nuevoJugador: Jugador;
    respuesta:Observable<any>;

    description: string;

    constructor(private fb: FormBuilder,private router: Router,public miServicioJugador:JuegoServiceService) 
    {
        this.nuevoJugador=new Jugador();
    }

    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required])),
            'password2': new FormControl('', Validators.compose([Validators.required,])),
        });

    
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];

        if (this.userform.value["password"]==this.userform.value["password2"]) 
        {
            this.nuevoJugador.mail=this.userform.value["firstname"];
        this.nuevoJugador.clave=this.userform.value["password"];
        //this.miServicioJugador.gettodos().subscribe(data =>console.log(data));
        this.respuesta=this.miServicioJugador.Registrar(this.nuevoJugador);
        this.respuesta.subscribe(data =>this.controlar(data))
        }
        else
        {
            this.msgs.push({severity:'error', summary:'Error', detail:'Las contraseñas no coinciden'});
        }
        
    }

    controlar($data)
    {
         console.log($data);
         if ($data.respuesta=="Jugador ya existente") {
 
             this.msgs.push({severity:'error', summary:'Error', detail:'Usuario ya registrado'});
         }
         else
         {
            localStorage.setItem("usuario",this.nuevoJugador.mail);
             this.router.navigate(['/indice']);
         }
    }
    get diagnostic() { return JSON.stringify(this.userform.value); }

}
