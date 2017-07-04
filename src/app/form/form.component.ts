import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ActivatedRoute } from "@angular/router";



import { FormService } from "app/services/form.service";
import { State } from "app/models/state.model";
import { City } from "app/models/city.model";
import { User} from "app/models/user.model";
import { UserService } from "app/services/user.service";
import { ScreeningDate } from "app/models/screening-date.model";



@Component({
  selector: 'cps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [User]
})
export class FormComponent implements OnInit {
  

  constructor(
              private formService:FormService,
              private userService: UserService,
              private route: ActivatedRoute
              //public user:User
              ) {  }

@Input()
nameButtonSubmit: string

@Input()
nameButtonDataTriagem: string

@Input()
isColecaoDataTriagem: boolean

@Input()
actionPathUrl: string 

@Output()
submit = new EventEmitter<User>();


collectionStates:State[]
collectionCity:City[]

user:User = new User()


  ngOnInit() {
    this.formatFieldMask()
    
    this.formService.getStates().subscribe(pState => this.collectionStates = pState)
    this.formService.getCitys(this.route.snapshot.params['idState']).subscribe(pCity => this.collectionCity = pCity)
     
    this.userService.getUserById(this.route.snapshot.params['id']).subscribe(pUser => this.user = pUser)

  } 
  
  eventSubmit(pUser:User){
       console.log(pUser)
       this.submit.emit(pUser)

  }


  ngChange(pValue){
    this.formService.getCitys(pValue).subscribe(pCidades => this.collectionCity = pCidades);
  }



  private formatFieldMask():void{
    $('#phone').mask('(99)9 9999-9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuProntuario').mask('999999999999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#zipCode').mask('99999-999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#dateOfBirth').mask('99/99/9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
  }

}
