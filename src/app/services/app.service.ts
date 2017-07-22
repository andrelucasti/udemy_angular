import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from "rxjs/Observable";

import { CAPSRNRB_HOST, CLIENT_ID, CLIENT_SECRET } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { PATH_LOGIN, PATH_HOME, PATH_ERROR_404, PATH_ERROR_SERVER } from "app/app.const";

@Injectable()
export class AppService {

  constructor(private http: Http, private router: Router) { }


  doLogin(pLoginData): Observable<URLSearchParams>{
    const headers= new Headers();
    headers.append("Content-Type","application/x-www-form-urlencoded")

    return this.http.post(`${CAPSRNRB_HOST}/doLogin`, this.getParams(pLoginData).toString() , new RequestOptions({headers: headers}))
               .map(response => response.json())
               .catch(ErrorHandler.handleError);
  }


  saveToken(pToken):void{
      console.log("cookie salvo: "+ pToken)
      Cookie.set("access_token", pToken)
  }

  refreshToken(pToken):void{
      console.log("cookie atualizado: "+ pToken)
      Cookie.delete("access_token")
      Cookie.set("access_token", pToken)
  }


  logout(){
      Cookie.delete("access_token");
      this.router.navigate([`${PATH_LOGIN}`])
  }

  
  controllerNavigationRedirect(pValue):boolean{
        if(pValue===200){
            this.router.navigate([`${PATH_HOME}`])
        }
        if(pValue===401){
            console.log("unauthorized...")
            this.router.navigate([`${PATH_LOGIN}`])
        }

        if(pValue===403){
            console.log("Not permission access...")
            this.router.navigate([`${PATH_LOGIN}`])
        }
        
        if(pValue===404){
            console.log("error....")
            this.router.navigate([`${PATH_ERROR_404}`])
        }

        if(pValue===500){
            console.log("error....")
            this.router.navigate([`${PATH_ERROR_SERVER}`])
        }

        return false;
    }




  private getParams(loginData):URLSearchParams{
    let params = new URLSearchParams();
    params.append("username", loginData.username);
    params.append("password", loginData.password);
    params.append("grant_type", "password");
    params.append("client_id", `${CLIENT_ID}`);
    params.append("client_secret", `${CLIENT_SECRET}`);

   
    
    return params;
  }
}
