import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cps-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editSubmit():void{
    alert("submit in the form edit");
  }
}
