import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


import { CAPSRNRB_HOST } from 'app/app.api';
import { User } from "app/models/user.model";



@Injectable()
export class UserService { 

  private headers = new Headers();
 

  constructor(private http: Http) {}

   getUsers(): Observable<User[]>{

   return this.http.get(`${CAPSRNRB_HOST}/user`)
      .map(response => response.json());


   }

    getUserById(pId): Observable<User>{

   return this.http.get(`${CAPSRNRB_HOST}/user/${pId}`)
      .map(response => response.json());


   }

   deleteUser(pId):Observable<User>{
     return this.http.delete(`${CAPSRNRB_HOST}/user/${pId}`)
            .map(response => response.json());
   }


  //Falta TESTAR!!!
 /* saveUsers(pUsuario:Usuario): Observable<Response>{
    return this.http.post(`${CAPSRNRB_HOST}/capsadrnrb/service/usuarios/`, JSON.stringify(pUsuario)).map(response => response.json());
  }*/

  

}
