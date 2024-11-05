import { Component, OnDestroy, OnInit } from '@angular/core';

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


  constructor(){
    this.firstName  = this.firstName.toUpperCase();
  }
  ngOnInit(): void {
    alert("Pipe Component Loaded")
  }
  ngOnDestroy(): void {
    alert("Pipe COmponent: ngOnDestroy")
  }
}
