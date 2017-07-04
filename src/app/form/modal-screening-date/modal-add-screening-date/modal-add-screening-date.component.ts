import { Component, OnInit, Input } from '@angular/core';

import { ScreeningDate } from "app/models/screening-date.model";
import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'cps-modal-add-screening-date',
  templateUrl: './modal-add-screening-date.component.html',
  styleUrls: ['./modal-add-screening-date.component.css']
})
export class ModalAddScreeningDateComponent implements OnInit {

  constructor(private userService:UserService) { }
 

  ngOnInit() {
  }

  @Input()
  user:User

  addNewDate(pValue):void{
    let screeningDate:ScreeningDate = new ScreeningDate()
    screeningDate.date = new Date(pValue.date).getTime()
 
    this.user.screeningDate.push(screeningDate)
    
    this.userService.editUser(this.user).subscribe(idStatus=>{
      console.log(idStatus)
    })
    
  }

  

}
