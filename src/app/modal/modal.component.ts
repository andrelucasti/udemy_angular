import { Component, OnInit, Input } from '@angular/core';

import { Usuario } from "app/models/usuario.model";
import { UsuariosService } from "app/services/usuarios.service";

@Component({
  selector: 'cps-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( private usuarioService:UsuariosService) { }
  
  @Input()
  usuario:string

  

  ngOnInit() {
    //this.usuarioService.getUsuario()

  }


  


}
