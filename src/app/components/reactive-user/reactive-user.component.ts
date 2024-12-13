import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reactive-user',
  templateUrl: './reactive-user.component.html',
  styleUrl: './reactive-user.component.css'
})
export class ReactiveUserComponent {
  userList: any[] = [];

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl("",[Validators.required,Validators.minLength(5)]),
    emailId: new FormControl("",[Validators.required,Validators.email]),
    fullName: new FormControl(""),
    role: new FormControl(""),
    createdDate: new FormControl(new Date()),
    password: new FormControl(""),
    projectName: new FormControl(""),
    refreshToken: new FormControl(""),
    refreshTokenExpiryTime: new FormControl(new Date())
  })

  constructor(private http: HttpClient,private userSrv: UserService) {

  }

  getUsers2() {
    // this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((res: any) => {
    //  
    //   this.userList = res.data;
    // })
    this.userSrv.getUsers().subscribe((res:any)=>{
      this.userList = res.data;
    })
  }

  onEdit(data: any) {
   
    this.userForm = new FormGroup({
      userId: new FormControl(data.userId),
      userName: new FormControl("",[Validators.required,Validators.minLength(5)]),
      emailId: new FormControl(data.emailId),
      fullName: new FormControl(data.fullName),
      role: new FormControl(data.role),
      createdDate: new FormControl(data.createdDate),
      password: new FormControl(data.password),
      projectName: new FormControl(data.projectName),
      refreshToken: new FormControl(data.refreshToken),
      refreshTokenExpiryTime: new FormControl(data.refreshTokenExpiryTime),
    })
    this.userForm.controls['userName'].markAsDirty({onlySelf:true,emitEvent: true});
  }


  onSaveUser() {
   
    if(!this.userForm.invalid) {
      const formValue = this.userForm.value;
      this.userSrv.saveUser(formValue).subscribe((res: any) => {
       
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
}
