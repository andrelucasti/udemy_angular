import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ActivatedRoute } from "@angular/router";



import { FormService } from "app/services/form.service";
import { State } from "app/models/state.model";
import { City } from "app/models/city.model";
import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";


@Component({
  selector: 'cps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formService:FormService, 
              private userService: UserService,
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
submit = new EventEmitter<User>();




collectionStates:State[]
collectionCity:City[]
user:User


  ngOnInit() {
    this.formatFieldMask();
    this.formService.getStates().subscribe(pState => this.collectionStates = pState)
    this.userService.getUserById(this.route.snapshot.params['id']).subscribe(pUser => this.user = pUser)
    this.formService.getCitys(this.route.snapshot.params['idState']).subscribe(pCity => this.collectionCity = pCity);
   
  
  }
  
  eventSubmit(){
   this.submit.emit()
  }


  ngChange(pValue){
    this.formService.getCitys(pValue).subscribe(pCidades => this.collectionCity = pCidades);
  }



  private formatFieldMask():void{
    $('#nuTelefone').mask('(99)9 9999-9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
  }

}
