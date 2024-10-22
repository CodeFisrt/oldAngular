import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userArray: any [] = [];
  userList: any []= [];

  constructor(private http: HttpClient) {

  }

  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((resposne:any)=>{
      this.userArray = resposne;
    })
  }

  getUsers2() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((res:any)=> {
      debugger;
      this.userList  = res.data;
    })
  }
}
