import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {

  miUrl: string = "http://localhost/apirest/usuario/entrar";
  miUrl2: string = "http://localhost/apirest/usuario/";
  miUrl3: string = "http://localhost/apirest/usuario/";

  retorno;

  constructor(public http:HttpClient) { }

gettodos():Observable<any>
{
 this.retorno=this.http.get(this.miUrl2);
  return this.retorno;
}

miget($url):Observable<any>
{
  return this.http.get($url);
}
 
mipost($url,$data):Observable<any>
{
  return this.http.post($url,$data);
}
}
