import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";


import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'cps-modal-usuario-delete',
  templateUrl: './modal-usuario-delete.component.html',
  styleUrls: ['./modal-usuario-delete.component.css']
})
export class ModalUsuarioDeleteComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

 
  
  @Input()
  user:User


  ngOnInit() {
    
  }


  deleteUsuario(pId):void{
    console.log("UsuarioID:" + pId)
    console.log("UsuarioID:" + this.user.id)
    this.userService.deleteUser(pId).subscribe(responseCode=>{
      this.refresh()
       console.log(responseCode) // if not code 200?
    })
  }

  refresh():void{
    window.location.reload();
  }
  


}
