import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  templateUrl: './reactive-user.component.html',
  styleUrl: './reactive-user.component.css'
})
export class ReactiveUserComponent {
  userList: any[] = [];

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl(""),
    emailId: new FormControl(""),
    fullName: new FormControl(""),
    role: new FormControl(""),
    createdDate: new FormControl(new Date()),
    password: new FormControl(""),
    projectName: new FormControl(""),
    refreshToken: new FormControl(""),
    refreshTokenExpiryTime: new FormControl(new Date())
  })

  constructor(private http: HttpClient) {

  }

  getUsers2() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((res: any) => {
      debugger;
      this.userList = res.data;
    })
  }

  onEdit(data: any) {
    debugger;
    this.userForm = new FormGroup({
      userId: new FormControl(data.userId),
      userName: new FormControl(data.userName),
      emailId: new FormControl(data.emailId),
      fullName: new FormControl(data.fullName),
      role: new FormControl(data.role),
      createdDate: new FormControl(data.createdDate),
      password: new FormControl(data.password),
      projectName: new FormControl(data.projectName),
      refreshToken: new FormControl(data.refreshToken),
      refreshTokenExpiryTime: new FormControl(data.refreshTokenExpiryTime),
    })
  }


  onSaveUser() {
    debugger;
    const formValue = this.userForm.value;
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/AddNewUser", formValue).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("User Created Success");
        this.getUsers2();
        this.userForm.reset();
      } else {
        alert(res.message)
      }
    })
  }
}
