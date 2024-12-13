import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnDestroy, OnInit {

  firstName: string = "Chetan";
  surname: string = "jogi";

  studentObj: any = {
    name: 'AAA',
    city:'Nagpur'
  };
  currentDate: Date = new Date();
  cityList: string []= ["Pune","Nagpur","Panjii","Thane","Mumbai","asdas","ccc","ggg"];
  currentThemenMode: string = '';

  constructor(private userService: UserService){
    this.firstName  = this.firstName.toUpperCase();
    this.userService.currentThemeBehvaiout.subscribe((mode:string)=>{
      debugger;
    })
    this.userService.currentMode$.subscribe((mode:string)=>{
      debugger;
       this.currentThemenMode = mode;
     })
  
  }

  getMode() {
    // this.userService.currentMode$.subscribe((mode:string)=>{
    //  debugger;
    //   this.currentThemenMode = mode;
    // })
  }
  ngOnInit(): void {
    this.getMode()
    alert("Pipe Component Loaded")
   
    const themeData = localStorage.getItem("currentTheme");

  }
  ngOnDestroy(): void {
    alert("Pipe COmponent: ngOnDestroy")
  }
}
