import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  userList: any[] = [];

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  onlogin() {
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        localStorage.setItem('userToken',res.data.token)
      } else {
        alert("Wrong Details")
      }
    })
  }
  getUsers() {
    this.http.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers').subscribe((res:any)=>{
      this.userList = res.data;
    },error=> {
      debugger;
    })
  }

}
