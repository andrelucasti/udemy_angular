import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { FormService } from "app/services/form.service";
import { UsuariosService } from "app/services/usuarios.service";
import { Estado } from "app/models/estado.model";
import { Cidade } from "app/models/cidade.model";
import { Usuario } from "app/models/usuario.model";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'cps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formService:FormService, 
              private usuarioService: UsuariosService,
              private route: ActivatedRoute) {  }

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




colecaoEstados:Estado[]
colecaoCidades:Cidade[]
usuario:Usuario


  ngOnInit() {
    this.formatFieldMask();
    this.formService.getEstados().subscribe(pEstados => this.colecaoEstados = pEstados)
    this.usuarioService.getUsuarioById(this.route.snapshot.params['id']).subscribe(pUsuario => this.usuario = pUsuario)
    this.formService.getCidades(this.route.snapshot.params['idEstado']).subscribe(pCidades => this.colecaoCidades = pCidades);
   
  
  }
  
  eventSubmit(){
   this.submit.emit()
  }


  ngChange(pValue){
    this.formService.getCidades(pValue).subscribe(pCidades => this.colecaoCidades = pCidades);
  }



  private formatFieldMask():void{
    $('#nuTelefone').mask('(99)9 9999-9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
  }

}
