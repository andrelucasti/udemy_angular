import { Component, OnInit } from '@angular/core';
import { AppService } from "app/services/app.service";

@Component({
  selector: 'cps-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.logout();

  }




}
