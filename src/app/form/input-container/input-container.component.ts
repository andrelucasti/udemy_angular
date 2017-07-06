import { Component, OnInit, ContentChild, Input, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'cps-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit, AfterContentInit {
  
  ngOnInit() {
  }

  // Esse cara é chamado após o conteudo for definido ou seja
  // Após o conteudo que vai ficar no lugar de <ng-content></ng-content> for definido
  ngAfterContentInit(){
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('O componente deve ser usado com uma diretiva ngModel')
    }
  }


  constructor() { }

  input:any

  @Input()
  label:string
  
  @Input()
  errorMsg:string

  @Input()
  materialIcon:string

  @Input()
  isIcon:boolean;

  @ContentChild(NgModel) model: NgModel


  inputValid():boolean{
    return this.input.valid && (this.input.pristine || this.input.toutched)
  }

  inputInvalid():boolean{
    return this.input.invalid
  }
}
