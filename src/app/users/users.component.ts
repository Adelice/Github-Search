import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {environment} from '../../environments/environment'
import {UserRequestService} from '../user-http/user-request.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[UserRequestService],
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user:User;
  Username="";
  constructor(private http:HttpClient,private userService:UserRequestService) {
    this.user=new User("","",0,0,0,"");
    
   }

  ngOnInit() {
    this.userService.userRequest("AdeliceNancy")
    
  }

}
