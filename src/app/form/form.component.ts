import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {
    this.formatFieldMask();
  }




  private formatFieldMask():void{
    $('#nuTelefone').mask('(99)9 9999-9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
  }

}
