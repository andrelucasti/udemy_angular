import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from "app/models/usuario.model";

@Component({
  selector: 'cps-modal-usuario-delete',
  templateUrl: './modal-usuario-delete.component.html',
  styleUrls: ['./modal-usuario-delete.component.css']
})
export class ModalUsuarioDeleteComponent implements OnInit {

  constructor() { }

 
  
  @Input()
  usuario:Usuario

  @Input()
  typeModal:string


  

  ngOnInit() {
    //this.usuarioService.getUsuario()

  }


}
