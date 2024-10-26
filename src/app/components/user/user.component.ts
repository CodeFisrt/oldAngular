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

  busUserObj : any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate":  new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }
  userObj:any = {
    "id": 0,
    "name": "",
    "username": "",
    "email": ""
  }

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

  editUSer(user:any) {

    const strObj = JSON.stringify(user);
    const parseObj =  JSON.parse(strObj)

    this.busUserObj =  parseObj;
  }

  deleteUSer(id: number ){

    const isDelete =  confirm("Are you sure want to Delete");
    debugger;
    if(isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/BusBooking/DeleteUserByUserId?userId=" +id).subscribe((res:any)=>{
        if(res.result) {
          alert("User Updated Success"); 
          this.getUsers2();
        } else {
          alert(res.message)
        }
      })
    }
   
  }

  updateUser() {
 
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/UpdateUser",this.busUserObj).subscribe((res:any)=>{
      if(res.result) {
        alert("User Updated Success");
        this.busUserObj  = {
          "userId": 0,
          "userName": "",
          "emailId": "",
          "fullName": "",
          "role": "",
          "createdDate":  new Date(),
          "password": "",
          "projectName": "",
          "refreshToken": "",
          "refreshTokenExpiryTime": new Date()
        }
        this.getUsers2();
      } else {
        alert(res.message)
      }
    })
  }

  // saveUser() {
  //   debugger;
  //   this.http.post("https://jsonplaceholder.typicode.com/users",this.userObj).subscribe((res:any)=>{
  //     debugger;
  //   })
  // }
 
  saveUser() {
      debugger;
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/AddNewUser",this.busUserObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("User Created Success");
        this.busUserObj  = {
          "userId": 0,
          "userName": "",
          "emailId": "",
          "fullName": "",
          "role": "",
          "createdDate":  new Date(),
          "password": "",
          "projectName": "",
          "refreshToken": "",
          "refreshTokenExpiryTime": new Date()
        }
      } else {
        alert(res.message)
      }
    })
  }
}
