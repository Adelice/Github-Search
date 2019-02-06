import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from '../user';

import {UserRequestService} from '../user-http/user-request.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[UserRequestService],
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user:User;
  userName="";
  submitRepos(){
    this.userService.userRequest(this.userName)
    console.log(this.userName)

  }
  
  constructor(private userService:UserRequestService) {
   
    
   }

  ngOnInit() {
    this.userService.userRequest("AdeliceNancy")
    this.user=this.userService.user
    
  }

}
