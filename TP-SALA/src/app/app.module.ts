import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgprimeModule} from './modulos/ngprime/ngprime.module';
import {MenuItem,Message,SelectItem} from 'primeng/api';


import { AppComponent } from './app.component';
import { TatetiComponent } from './comp/tateti/tateti.component';
import { AnagramaComponent } from './comp/anagrama/anagrama.component';
import { PiedrapapeltijeraComponent } from './comp/piedrapapeltijera/piedrapapeltijera.component';
import { AgilidadComponent } from './comp/agilidad/agilidad.component';
import { AdivinaComponent } from './comp/adivina/adivina.component';
import { MijuegoComponent } from './comp/mijuego/mijuego.component';
import { ErrorComponent } from './comp/error/error.component';
import { IndiceComponent } from './comp/indice/indice.component';
import { MenuComponent } from './comp/menu/menu.component';
import { LoginComponent } from './comp/login/login.component';
import { RegistroComponent } from './comp/registro/registro.component';
import { ListadoComponent } from './comp/listado/listado.component';
import { HttpClient } from 'selenium-webdriver/http';
import { MiHttpService } from './servicios/mi-http.service';
import { JuegoServiceService } from './servicios/juego-service.service';

const Config:Routes=[{
  path:'tateti',
  component:TatetiComponent
},
{
  path:'anagrama',
  component:AnagramaComponent
},
{
  path:'piedrapapeltijera',
  component:PiedrapapeltijeraComponent
},
{
  path:'agilidadaritmetica',
  component:AgilidadComponent
},
{
  path:'adivinanumero',
  component:AdivinaComponent
},
{
  path:'mijuego',
  component:MijuegoComponent
},
{
  path:'',
  component:LoginComponent
},
{
  path:'registro',
  component:RegistroComponent
},
{
  path:'indice',
  component:IndiceComponent
},
{
  path:'listado',
  component:ListadoComponent
},
{
  path:'**',
  component:ErrorComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    TatetiComponent,
    AnagramaComponent,
    PiedrapapeltijeraComponent,
    AgilidadComponent,
    AdivinaComponent,
    MijuegoComponent,
    ErrorComponent,
    IndiceComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    ListadoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
   HttpClientModule,
    BrowserAnimationsModule,
    NgprimeModule,
    RouterModule.forRoot(Config),ReactiveFormsModule,CardModule
  ],
  providers: [MiHttpService,JuegoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
