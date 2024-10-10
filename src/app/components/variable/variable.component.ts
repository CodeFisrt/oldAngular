import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrl: './variable.component.css'
})
export class VariableComponent {

  //premitive Data Type: string, boolean, number,date, 
  //derived data type: array , object,
  //null & undefined
  //any


  //declaration + initialization
  firstName: string = "Chetan";
  startingChar : string = "C";
  rollNo: number = 123;
  productPrice: number = 12.50;
  isActive: boolean = false;
  currentDate: Date =  new Date(); 
  //declaration
  student: string;
  //declartion + initialzation without datatype
  lastName = "Jogi"; 

  constructor() {
    this.student = "";
    this.firstName = "Rahul";
    //this.startingChar = 123; 
    // this.student = 123;
    // this.student = "sadadasd";
    // this.student = true;
    //this.lastName = 213;

  }


}
