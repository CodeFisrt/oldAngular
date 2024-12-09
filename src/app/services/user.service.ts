import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})


export class UserService {

  apiUrl: string = "https://projectapi.gerasim.in/api/BusBooking/"
  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(this.apiUrl + "GetAllUsers")
  }

  saveUser(obj:any) {
    debugger;
    return this.http.post(`${this.apiUrl}AddNewUser`,obj)
  }
}
