import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'cps-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
   
  }

  user:User = new User()

  editSubmit(pUser:User):void{
    console.log()
    console.log(pUser)
    //Refactore... to create one lib for functions
    pUser.dateOfBirth = new Date(pUser.dateOfBirth).getTime()
    //pUser.screeningDt.date = new Date(pUser.screeningDt.date).getTime()
    //pUser.screeningDate.push(pUser.screeningDt)
    
    this.userService.editUser(pUser).subscribe((responseCode:string) =>{
      this.router.navigate(['/'])
      console.log(responseCode) // if not code 200?
      
    });
  }

  
}
