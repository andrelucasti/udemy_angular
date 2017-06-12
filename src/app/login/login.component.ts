import { Component, OnInit } from '@angular/core';

import { UserService } from "app/services/user.service";

@Component({
  selector: 'cps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }


 username:String = ""
 password:String = ""

 go(){
   this.userService.login(this.username, this.password).subscribe();
 }

}
