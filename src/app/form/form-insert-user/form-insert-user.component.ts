import { Component, OnInit } from '@angular/core';

import { UserService } from "app/services/user.service";
import { User } from "app/models/user.model";
import { UserImpl } from "app/models/UserImpl.model";


@Component({
  selector: 'cps-form-insert-user',
  templateUrl: './form-insert-user.component.html',
  styleUrls: ['./form-insert-user.component.css']
})
export class FormInsertUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  user:User = new UserImpl()

  insertSubmit():void{
    
    alert("submit no inserir");
    alert(`Nome do usuario:${this.user.name}`);
  }


}
