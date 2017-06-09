import { Component, OnInit} from '@angular/core';
import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";


@Component({
  selector: 'cps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  listUser: User[]


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(pUser => this.listUser = pUser);
  }






  
  
}
