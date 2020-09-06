import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";



@Component({
  selector: 'app-user-demo2',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent{
  userName: string;

  constructor(private userService: UserService) {
  }
  signIn(): void{
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }


}
