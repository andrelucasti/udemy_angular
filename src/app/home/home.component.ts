import { Component, OnInit} from '@angular/core';

import { Usuario } from "app/models/usuario.model";
import { UsuariosService } from "app/services/usuarios.service";


@Component({
  selector: 'cps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  colecaoUsuarios: Usuario[]


  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(pUsuarios => this.colecaoUsuarios = pUsuarios);
  }






  
  
}
