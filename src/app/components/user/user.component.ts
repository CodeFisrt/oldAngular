import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userArray: any[] = [];
  userList: any[] = [];
  carList : string []= ['Maruti','Mahndra','MG']
  alertType: string = '';
  alertMessage: string = '';

  tableHeadingList: string [] = [ "fullName", "projectName", "role"]

  busUserObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }
  userObj: any = {
    "id": 0,
    "name": "",
    "username": "",
    "email": ""
  }

  constructor(private http: HttpClient, private userSrv: UserService) {

  }
  ngOnInit(): void {
    this.getUsers2()
  }

  getUsers() {
    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((resposne:any)=>{
    //   this.userArray = resposne;
    // })

    this.userSrv.getUsers().subscribe((res: any) => {
      this.userArray = res;
    })
  }

  getUsers2() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((res: any) => {
      debugger;
      this.userList = res.data;
    })
  }

  editUSer(user: any) {
    debugger;
    const strObj = JSON.stringify(user);
    const parseObj = JSON.parse(strObj)

    this.busUserObj = parseObj;
  }

  deleteUSer(id: number) {

    const isDelete = confirm("Are you sure want to Delete");
    debugger;
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/BusBooking/DeleteUserByUserId?userId=" + id).subscribe((res: any) => {
        if (res.result) {
          alert("User Updated Success");
          this.getUsers2();
        } else {
          alert(res.message)
        }
      })
    }

  }

  updateUser() {

    this.http.post("https://projectapi.gerasim.in/api/BusBooking/UpdateUser", this.busUserObj).subscribe((res: any) => {
      if (res.result) {
        alert("User Updated Success");
        this.busUserObj = {
          "userId": 0,
          "userName": "",
          "emailId": "",
          "fullName": "",
          "role": "",
          "createdDate": new Date(),
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
    this.userSrv.saveUser(this.busUserObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        // alert("User Created Success");
        this.alertType = 'Success';
        this.alertMessage = "User Created Success"
        setTimeout(() => {
          this.alertType = '';
        }, 6000);
        this.busUserObj = {
          "userId": 0,
          "userName": "",
          "emailId": "",
          "fullName": "",
          "role": "",
          "createdDate": new Date(),
          "password": "",
          "projectName": "",
          "refreshToken": "",
          "refreshTokenExpiryTime": new Date()
        }
      } else {
        this.alertType = 'Danger';
        this.alertMessage = res.message
        setTimeout(() => {
          this.alertType = '';
        }, 6000);
        // alert(res.message)
      }
    })
  }
}
