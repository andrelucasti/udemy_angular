import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/models/usuario.model";

@Component({
  selector: 'cps-form-insert-user',
  templateUrl: './form-insert-user.component.html',
  styleUrls: ['./form-insert-user.component.css']
})
export class FormInsertUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  insertSubmit(pUsuario:Usuario):void{
    alert("submit no inserir");
    alert(`Nome do usuario:`+pUsuario.nome);
  }


}
