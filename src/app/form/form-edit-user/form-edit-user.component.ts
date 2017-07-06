import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";
import { ScreeningDate } from "app/models/screening-date.model";

@Component({
  selector: 'cps-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
     

  }


  user:User = new User();

  editSubmit(pUserForm):void{
    let id = this.route.snapshot.params['id'];
    
    this.userService.getUserById(id).subscribe(pUser => {
      console.log("Consultou a base")
      console.log(pUser)
      console.log("FORM")
      console.log(pUserForm)
    
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

      pUser.dateOfBirth          = new Date(pUserForm.dateOfBirth).getTime()
   

    
      this.userService.editUser(pUser).subscribe((responseCode:string) =>{
        this.router.navigate(['/'])
        console.log(responseCode) // if not code 200?
        
      });

      console.log("OBJ Atualizado")
      console.log(pUser)
      
      
    });
   

    }

  
}
