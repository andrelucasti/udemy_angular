import { Component, OnInit, Input } from '@angular/core';

import { UserService } from "app/services/user.service";
import { User } from "app/models/user.model";


@Component({
  selector: 'cps-modal-usuario-delete',
  templateUrl: './modal-usuario-delete.component.html',
  styleUrls: ['./modal-usuario-delete.component.css']
})
export class ModalUsuarioDeleteComponent implements OnInit {

  constructor(private userService:UserService) { }

 
  
  @Input()
  user:User


  ngOnInit() {
    
  }


  deleteUsuario(pId):void{
    this.userService.deleteUser(pId).subscribe()
  }

  


}
