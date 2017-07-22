import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { CAPSRNRB_HOST } from "app/app.api";
import { Root } from "app/models/root.model";
import { AppCodes } from "app/app.codes";
import { AppService } from "app/services/app.service";

@Component({
  selector: 'cps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService:AppService, 
              private route: Router) { }

  ngOnInit() {
  }

public loginData = {username : "", password : ""}

 msgError:string = " 'Login/E-mail' e ou 'Senha' incorretos"
 noHaserror:boolean = true 
 //jsonString:string

 doLogin(pValue):void{
    this.loginData.username = pValue.username
    this.loginData.password = pValue.password
   
    this.appService.doLogin(this.loginData).subscribe(
        responseCode => {
          let jsonString = JSON.stringify(responseCode);
          let OAuthASResponse = JSON.parse(jsonString);
          
          let OAuthASResponseBody = JSON.parse(OAuthASResponse.body);

          console.log(OAuthASResponse);
          console.log(OAuthASResponseBody);          

          this.appService.saveToken(OAuthASResponseBody.access_token)
          this.noHaserror = this.appService.controllerNavigationRedirect(OAuthASResponse.responseStatus)

          

        })

 }





}
