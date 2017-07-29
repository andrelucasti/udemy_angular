import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "app/services/user.service";
import { User } from "app/models/user.model";
import { ScreeningDate } from "app/models/screening-date.model";
import { AppCodes } from "app/app.codes";
import { AppService } from "app/services/app.service";

@Component({
  selector: 'cps-form-insert-user',
  templateUrl: './form-insert-user.component.html',
  styleUrls: ['./form-insert-user.component.css'],
  
})
export class FormInsertUserComponent implements OnInit {

  constructor(private userService: UserService,
              private appService:AppService
                 ) { }

  ngOnInit() {
  }

  insertSubmit(pUserForm):void{

    let user:User = new User();
    let screeningDate: ScreeningDate = new ScreeningDate();
    
    user.name                 = pUserForm.name
    user.motherName           = pUserForm.motherName
    user.nuProntuario         = pUserForm.nuProntuario
    user.nuCartSus            = pUserForm.nuCartSus
    user.fileLocal            = pUserForm.fileLocal
    user.drugType             = pUserForm.drugType 
    user.phone                = pUserForm.phone 
    user.address.street       = pUserForm.street  
    user.address.complement   = pUserForm.complement  
    user.address.district     = pUserForm.district  
    user.address.zipCode      = pUserForm.zipCode 
    user.address.city.state.id = parseInt(pUserForm.state)   
    user.address.city.id       = parseInt(pUserForm.city) 

    user.dateOfBirthText          = pUserForm.dateOfBirth
    screeningDate.dateText            = pUserForm.screeningDate
    console.log("screeningDate:")
    console.log(screeningDate)

    user.screeningDate.push(screeningDate)

   
    this.userService.saveUser(user).subscribe(
        responseCode => {
          let jsonString = JSON.stringify(responseCode);
          let OAuthASResponse = JSON.parse(jsonString);
          
          let OAuthASResponseBody = JSON.parse(OAuthASResponse.body);

          console.log(OAuthASResponse);
          console.log(OAuthASResponseBody);          

          this.appService.refreshToken(OAuthASResponseBody.refresh_token)
          this.appService.controllerNavigationRedirect(OAuthASResponse.responseStatus)

          

        })
    
  }




 


}
