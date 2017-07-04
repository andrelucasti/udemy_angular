import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


import { CAPSRNRB_HOST } from 'app/app.api';
import { User } from "app/models/user.model";



@Injectable()
export class UserService { 

 

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


  saveUser(pUser:User): Observable<String>{
    const headers= new Headers();
    headers.append("Content-Type","application/json")
    return this.http.post(`${CAPSRNRB_HOST}/user`, JSON.stringify(pUser), new RequestOptions({headers: headers})).map(response => response.json());
  }

  editUser(pUser:User):Observable<String>{
    const headers= new Headers();
    headers.append("Content-Type","application/json")

    return this.http.put(`${CAPSRNRB_HOST}/user`, JSON.stringify(pUser), new RequestOptions({headers: headers})).map(response => response.json());

  }

  

}
