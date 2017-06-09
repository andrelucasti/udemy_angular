import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'cps-form-get-user',
  templateUrl: './form-get-user.component.html',
  styleUrls: ['./form-get-user.component.css']
})
export class FormGetUserComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  getUserSubmit():void{
    alert("submit in the form get");
    

  }

  

}
