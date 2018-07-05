import { Component, OnInit } from '@angular/core';
import {MenuItem,Message,SelectItem} from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'fa-home',
                routerLink: ['/indice'] 
            },
            {
                label: 'Juegos',
                items: [
                    {label: 'Adivina el numero', routerLink: ['/adivinanumero']},
                    {label: 'Piedra Papel o Tijera', routerLink: ['/piedrapapeltijera']},
                    {label: 'Anagrama', routerLink: ['/anagrama']},
                    {label: 'Agilidad aritmetica', routerLink: ['/agilidadaritmetica']},
                    {label: '4 Imagenes 1 Palabra', routerLink: ['/mijuego']}
                ]
            },
            {
                label: 'Listado',
                icon: 'fa-edit',
                routerLink: ['/listado'] 
            }
        ];
    }

    salir()
    {
        //console.log("asda");
        localStorage.removeItem("usuario");
        this.router.navigate(['']);
    }
}
