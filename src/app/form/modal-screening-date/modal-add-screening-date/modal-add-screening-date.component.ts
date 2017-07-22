import { Component, OnInit, Input } from '@angular/core';

import { ScreeningDate } from "app/models/screening-date.model";
import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";
import { AppService } from "app/services/app.service";

@Component({
  selector: 'cps-modal-add-screening-date',
  templateUrl: './modal-add-screening-date.component.html',
  styleUrls: ['./modal-add-screening-date.component.css']
})
export class ModalAddScreeningDateComponent implements OnInit {

  constructor(private userService:UserService,
              private appService:AppService) { }
 

  ngOnInit() {
  }

  @Input()
  user:User

  addNewDate(pValue):void{
    let screeningDate:ScreeningDate = new ScreeningDate()
    screeningDate.date = new Date(pValue.date).getTime()
 
    this.user.screeningDate.push(screeningDate)

    console.log(this.user)
    
   this.userService.editUser(this.user).subscribe(responseCode=>{
      
          let jsonString = JSON.stringify(responseCode);
          let OAuthASResponse = JSON.parse(jsonString);
          
          let OAuthASResponseBody = JSON.parse(OAuthASResponse.body);

          console.log(OAuthASResponse);
          console.log(OAuthASResponseBody);          

          this.appService.refreshToken(OAuthASResponseBody.refresh_token)
          
        }  
    );
    
  }

  

}
