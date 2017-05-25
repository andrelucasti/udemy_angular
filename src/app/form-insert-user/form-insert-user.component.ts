import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cps-form-insert-user',
  templateUrl: './form-insert-user.component.html',
  styleUrls: ['./form-insert-user.component.css']
})
export class FormInsertUserComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
    this.formatFieldMask();
  }

  private formatFieldMask():void{
    $('#nuTelefone').mask('(99)9 9999-9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
  }
}
