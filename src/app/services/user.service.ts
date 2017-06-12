import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


import { CAPSRNRB_HOST } from 'app/app.api';
import { User } from "app/models/user.model";



@Injectable()
export class UserService { 

  private headers = new Headers();
  private username_credential = "my-angular-client"
  private password_crendential = "secret" 

  public json:string = ""


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


   login(pUsername, pPassword):Observable<boolean>{
    console.log("Chamou o login")
    console.log("username:" + pUsername + " e password: " + pPassword)

    console.log(`URL: ${CAPSRNRB_HOST}/oauth/token?grant_type=password&username=${pUsername}&password=${pPassword}`)

    this.headers.append('Access-Control-Allow-Credentials', 'true')
    this.headers.append('Content-Type', 'application/json')
    this.headers.append('Authorization','Basic '+btoa(`${this.username_credential}:${this.password_crendential}`))
    this.headers.append('Access-Control-Allow-Origin', '*')

    console.log(`Header: ${this.myArray(this.headers.toJSON())}`)

    console.log("JSONStringfy:" + JSON.stringify({headers:this.headers}))

     return this.http.post(`${CAPSRNRB_HOST}/oauth/token?grant_type=password&username=${pUsername}&password=${pPassword}`, 
                            JSON.stringify({headers:this.headers}))
            .map((response: Response) => {
                let token = response.json().access_token;

                console.log("JSON: "+response.json())

                if(token != undefined){
                    return true;
                } else{
                  return false;
                }
            })
   }


private myArray(pMyObj):Array<any> {
  let x=[]
  $.each(pMyObj, function(i, n){
    x.push(n)
  })

  return x;
}


  //Falta TESTAR!!!
 /* saveUsers(pUsuario:Usuario): Observable<Response>{
    return this.http.post(`${CAPSRNRB_HOST}/capsadrnrb/service/usuarios/`, JSON.stringify(pUsuario)).map(response => response.json());
  }*/

  

}
