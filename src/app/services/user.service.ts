import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})


export class UserService {

  apiUrl: string = "https://projectapi.gerasim.in/api/BusBooking/";

  currentMode$ : Subject<string> = new Subject<string>();

  currentThemeBehvaiout: BehaviorSubject< string> = new BehaviorSubject<string>("Dark")

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(this.apiUrl + "GetAllUsers")
  }

  saveUser(obj:any) {
   
    return this.http.post(`${this.apiUrl}AddNewUser`,obj)
  }
}
