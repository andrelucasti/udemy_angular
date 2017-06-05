import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Usuario } from "app/models/usuario.model";

@Component({
  selector: 'cps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

@Input()
nameButtonSubmit: string

@Input()
nameButtonDataTriagem: string

@Input()
isColecaoDataTriagem: boolean

@Input()
actionPathUrl: string 

@Output()
submit = new EventEmitter<Usuario>();


  ngOnInit() {
    this.formatFieldMask();
  }

  usuario:Usuario
  
  eventSubmit(pUsuario:Usuario){
    alert(this.usuario.nome)
   this.submit.emit(pUsuario)
  }

  historyback(){
    window.history.back();
  }



  private formatFieldMask():void{
    $('#nuTelefone').mask('(99)9 9999-9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
  }

}
