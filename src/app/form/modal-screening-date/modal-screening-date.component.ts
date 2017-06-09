import { Component, OnInit, Input } from '@angular/core';

import { User } from "app/models/user.model";

@Component({
  selector: 'cps-modal-screening-date',
  templateUrl: './modal-screening-date.component.html',
  styleUrls: ['./modal-screening-date.component.css']
})
export class ModalScreeningDateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  user: User

}
