import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


import { CAPSRNRB_HOST } from 'app/app.api';
import { Usuario } from "app/models/usuario.model";


@Injectable()
export class UsuariosService { 

  constructor(private http: Http) {}

   getUsuarios(): Observable<Usuario[]>{

   return this.http.get(`${CAPSRNRB_HOST}/capsadrnrb/service/usuarios/`)
      .map(response => response.json());


   }


  //Falta TESTAR!!!
  saveUsers(pUsuario:Usuario): Observable<Response>{
    return this.http.post(`${CAPSRNRB_HOST}/capsadrnrb/service/usuarios/`, JSON.stringify(pUsuario)).map(response => response.json());
  }

  

}
