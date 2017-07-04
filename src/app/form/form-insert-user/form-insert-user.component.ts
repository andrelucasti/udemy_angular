import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "app/services/user.service";
import { User } from "app/models/user.model";

@Component({
  selector: 'cps-form-insert-user',
  templateUrl: './form-insert-user.component.html',
  styleUrls: ['./form-insert-user.component.css'],
  
})
export class FormInsertUserComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router  ) { }

  ngOnInit() {
  }

  insertSubmit(pUser:User):void{

    //Refactore... to create one lib for functions
    pUser.dateOfBirth = new Date(pUser.dateOfBirth).getTime()
    pUser.screeningDt.date = new Date(pUser.screeningDt.date).getTime()
    pUser.screeningDate.push(pUser.screeningDt)
    
    this.userService.saveUser(pUser).subscribe((responseCode:string) =>{
      this.router.navigate(['/'])
      console.log(responseCode) // if not code 200?
      
    });

  }




 


}
