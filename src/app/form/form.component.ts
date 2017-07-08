import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
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
submit = new EventEmitter();

@ViewChild('form')
form: any


collectionStates:State[]
collectionCity:City[]

user:User = new User()

name:string
motherName:string
dateOfBirth:number
nuProntuario:number
nuCartSus:string
fileLocal:string
drugType:string
phone:string
screeningDate:number
street: string
complement: string
district: string
zipCode: string
idState:number
idCity:number

isFormValid:boolean = true


  ngOnInit() {
    this.formatFieldMask()
    this.getUser();

    this.formService.getStates().subscribe(pState => this.collectionStates = pState)
   
     
    
  } 
  
  eventSubmit(pUserForm){
    console.log(pUserForm)
    if(this.form.valid){
      this.submit.emit(pUserForm)
      this.isFormValid = true
    } else {
      this.isFormValid = false
    }
  }


  ngChange(pValue){
    this.formService.getCitys(pValue).subscribe(pCidades => this.collectionCity = pCidades);
  }



  private formatFieldMask():void{
    $('#phone').mask('(99)999999999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#nuCartSus').mask('999 9999 9999 9999', {translation:  {'Z': {pattern: /[0-9]/, optional: false}}});
    $('#nuProntuario').mask('999999999999', {translation:  {'Z': {pattern: /[0-9]/, optional: false}}});
    $('#zipCode').mask('99999-999', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
    $('#dateOfBirth').mask('99/99/9999', {translation:  {'Z': {pattern: /[0-9]/, optional: false}}});
    $('#screeningDate').mask('99/99/9999', {translation:  {'Z': {pattern: /[0-9]/, optional: false}}});

   
  }




  private getUser():void{
    let id = this.route.snapshot.params['id'];
    if(id !== undefined){
        this.userService.getUserById(this.route.snapshot.params['id']).subscribe(pUser => {
        this.user         = pUser
        
        this.name         = pUser.name
        this.motherName   = pUser.motherName
        this.dateOfBirth  = pUser.dateOfBirth
        this.nuProntuario = pUser.nuProntuario
        this.nuCartSus    = pUser.nuCartSus
        this.fileLocal    = pUser.fileLocal
        this.drugType     = pUser.drugType
        this.phone        = pUser.phone
        
        this.street       = pUser.address.street
        this.complement   = pUser.address.complement
        this.district     = pUser.address.district
        this.zipCode      = pUser.address.zipCode
        this.idState      = pUser.address.city.state.id
        this.idCity       = pUser.address.city.id
        
        

      });

       this.formService.getCitys(this.route.snapshot.params['idState']).subscribe(pCity => this.collectionCity = pCity)
      
    }

    
  }
  

}
