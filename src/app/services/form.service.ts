import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Estado } from "app/models/estado.model";
import { Cidade } from "app/models/cidade.model";
import { CAPSRNRB_HOST } from "app/app.api";


@Injectable()
export class FormService {

  constructor(private http: Http) { }

  getEstados():Observable<Estado[]>{
    return this.http.get(`${CAPSRNRB_HOST}/capsadrnrb/service/usuarios/estados`)
    .map(response => response.json())
  }

  getCidades(pIdEstado):Observable<Cidade[]>{
    
    return this.http.get(`${CAPSRNRB_HOST}/capsadrnrb/service/usuarios/cidades/${pIdEstado}`)
    .map(response => response.json());
  }


  


}
