import { Component, OnInit } from '@angular/core';
import { ScreeningDate } from "app/models/screening-date.model";

@Component({
  selector: 'cps-modal-add-screening-date',
  templateUrl: './modal-add-screening-date.component.html',
  styleUrls: ['./modal-add-screening-date.component.css']
})
export class ModalAddScreeningDateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  screeningDate:ScreeningDate

  addNewDate():void{
    console.log(this.screeningDate.date);
  }

}
