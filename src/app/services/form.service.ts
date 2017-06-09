import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


import { CAPSRNRB_HOST } from "app/app.api";
import { State } from "app/models/state.model";
import { City } from "app/models/city.model";


@Injectable()
export class FormService {

  constructor(private http: Http) { }

  getStates():Observable<State[]>{
    return this.http.get(`${CAPSRNRB_HOST}/states`)
    .map(response => response.json())
  }

  getCitys(pIdState):Observable<City[]>{
    
    return this.http.get(`${CAPSRNRB_HOST}/citys/${pIdState}`)
    .map(response => response.json());
  }


  


}
