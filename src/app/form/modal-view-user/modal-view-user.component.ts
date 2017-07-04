import { Component, OnInit, Input } from '@angular/core';

import { User } from "app/models/user.model";

@Component({
  selector: 'cps-modal-view-user',
  templateUrl: './modal-view-user.component.html',
  styleUrls: ['./modal-view-user.component.css']
})
export class ModalViewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  user:User

  
  @Input()
  isColecaoDataTriagem: boolean

  downloadReport():void{
    //go implement
  }

}
