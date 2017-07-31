import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";


import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";
import { AppService } from "app/services/app.service";

@Component({
  selector: 'cps-modal-usuario-delete',
  templateUrl: './modal-usuario-delete.component.html',
  styleUrls: ['./modal-usuario-delete.component.css']
})
export class ModalUsuarioDeleteComponent implements OnInit {

  constructor(private userService:UserService, private appService:AppService) { }

 
  
  @Input()
  user:User


  ngOnInit() {
    
  }


  deleteUsuario(pId):void{
    console.log("UsuarioID:" + pId)
    console.log("UsuarioID:" + this.user.id)
    this.userService.deleteUser(pId).subscribe(responseCode=>{
          let jsonString = JSON.stringify(responseCode);
          let OAuthASResponse = JSON.parse(jsonString);
          
          let OAuthASResponseBody = JSON.parse(OAuthASResponse.body);

          console.log(OAuthASResponse);
          console.log(OAuthASResponseBody);          

          this.appService.refreshToken(OAuthASResponseBody.refresh_token)
          this.appService.controllerNavigationRedirect(OAuthASResponse.responseStatus)
          this.refresh()
          
          
    })
  }

  refresh():void{
    window.location.reload();
  }
  


}
