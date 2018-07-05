import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Jugador } from '../clases/jugador';
import { Observable } from "rxjs/Observable";

@Injectable()
export class JuegoServiceService {


  constructor(public http:MiHttpService ) {
  
  }

  Entrar($data):Observable<any>
  {
    return this.http.mipost("http://localhost/apirest/usuario/entrar",$data);
  }
  Registrar($data):Observable<any>
  {
    return this.http.mipost("http://localhost/apirest/usuario/",$data);
  }

  Archivar($data)
  {
    return this.http.mipost("http://localhost/apirest/usuario/resultado",$data);
  }
  TraerListado($data)
  {
    return this.http.miget("http://localhost/apirest/usuario/"+$data);
  }
}
