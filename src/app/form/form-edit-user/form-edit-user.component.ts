import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";
import { ScreeningDate } from "app/models/screening-date.model";
import { AppService } from "app/services/app.service";

@Component({
  selector: 'cps-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {

  constructor(private userService:UserService, 
              private appService:AppService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
     

  }


  user:User = new User();

  editSubmit(pUserForm):void{
    let id = this.route.snapshot.params['id'];
    
    this.userService.getUserById(id).subscribe(pUser => {
          
      pUser.name                 = pUserForm.name
      pUser.motherName           = pUserForm.motherName
      pUser.nuProntuario         = pUserForm.nuProntuario
      pUser.nuCartSus            = pUserForm.nuCartSus
      pUser.fileLocal            = pUserForm.fileLocal
      pUser.drugType             = pUserForm.drugType 
      pUser.phone                = pUserForm.phone 
      pUser.address.street       = pUserForm.street  
      pUser.address.complement   = pUserForm.complement  
      pUser.address.district     = pUserForm.district  
      pUser.address.zipCode      = pUserForm.zipCode 
      pUser.address.city.state.id = parseInt(pUserForm.state)   
      pUser.address.city.id       = parseInt(pUserForm.city) 

      pUser.dateOfBirthText          = pUserForm.dateOfBirth
   
      console.log(pUser)
    
      this.userService.editUser(pUser).subscribe(responseCode => {
          let jsonString = JSON.stringify(responseCode);
          let OAuthASResponse = JSON.parse(jsonString);
          
          let OAuthASResponseBody = JSON.parse(OAuthASResponse.body);

          console.log(OAuthASResponse);
          console.log(OAuthASResponseBody);          

          this.appService.refreshToken(OAuthASResponseBody.refresh_token)
          this.appService.controllerNavigationRedirect(OAuthASResponse.responseStatus)

          

        })

      
    });
   

    }

  
}
