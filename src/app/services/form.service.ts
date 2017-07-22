import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


import { CAPSRNRB_HOST } from "app/app.api";
import { State } from "app/models/state.model";
import { City } from "app/models/city.model";
import { Cookie } from "ng2-cookies/ng2-cookies";


@Injectable()
export class FormService {

  constructor(private http: Http) { }

  getStates():Observable<State[]>{
     const headers= new Headers();
    headers.append("Content-Type","application/x-www-form-urlencoded")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)
    return this.http.get(`${CAPSRNRB_HOST}/states`, new RequestOptions({headers: headers}))
    .map(response => response.json())
  }

  getCitys(pIdState):Observable<City[]>{
     const headers= new Headers();
    headers.append("Content-Type","application/x-www-form-urlencoded")
    headers.append("Authorization",`Bearer ${Cookie.get("access_token")}`)
    return this.http.get(`${CAPSRNRB_HOST}/citys/${pIdState}`, new RequestOptions({headers: headers}))
    .map(response => response.json());
  }


  

  


}
