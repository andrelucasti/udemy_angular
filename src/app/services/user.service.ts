import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Cookie } from "ng2-cookies/ng2-cookies";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from "app/models/user.model";
import { CAPSRNRB_HOST, CLIENT_ID, CLIENT_SECRET } from 'app/app.api';
import { ErrorHandler } from "app/app.error-handler";



@Injectable()
export class UserService { 

 

  constructor(private http: Http, private router: Router) {}

   getUsers(): Observable<User[]>{
    const headers= new Headers();
    headers.append("Content-Type","application/x-www-form-urlencoded")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)
    
    return this.http.get(`${CAPSRNRB_HOST}/user` , new RequestOptions({headers: headers}))
               .map(response => response.json())
               .catch(ErrorHandler.handleError);

   }

    getUserById(pId): Observable<User>{
         const headers= new Headers();
    headers.append("Content-Type","application/x-www-form-urlencoded")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)
    return this.http.get(`${CAPSRNRB_HOST}/user/${pId}`, new RequestOptions({headers: headers}))
      .map(response => response.json());


   }

   deleteUser(pId):Observable<URLSearchParams>{
    const headers= new Headers();
    headers.append("Content-Type","application/x-www-form-urlencoded")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)
     return this.http.delete(`${CAPSRNRB_HOST}/user/${pId}`, new RequestOptions({headers: headers}))
            .map(response => response.json());
   }


  saveUser(pUser:User): Observable<URLSearchParams>{
    const headers= new Headers();
    headers.append("Content-Type","application/json")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)
    return this.http.post(`${CAPSRNRB_HOST}/user`, JSON.stringify(pUser), new RequestOptions({headers: headers})).map(response => response.json());
  }

  editUser(pUser:User):Observable<URLSearchParams>{
    const headers= new Headers();
    headers.append("Content-Type","application/json")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)

    return this.http.put(`${CAPSRNRB_HOST}/user`, JSON.stringify(pUser), new RequestOptions({headers: headers})).map(response => response.json());

  }

  
  private getParams():URLSearchParams{
    let params = new URLSearchParams();
//params.append("username", loginData.username);
  //  params.append("password", loginData.password);
    params.append("grant_type", "password");
    params.append("client_id", `${CLIENT_ID}`);
    params.append("client_secret", `${CLIENT_SECRET}`);

   
    
    return params;
  }
}
