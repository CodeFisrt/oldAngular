import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrl: './variable.component.css'
})
export class VariableComponent implements OnInit,AfterContentInit,AfterContentChecked,OnDestroy, AfterViewInit,AfterViewChecked {
 
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
  isVisiable: boolean = false;

  constructor() {
    this.student = "";
    this.firstName = "Rahul";
    //this.startingChar = 123; 
    // this.student = 123;
    // this.student = "sadadasd";
    // this.student = true;
    //this.lastName = 213;
    console.log("constructor")
  }

  showHide(value: boolean) {
    this.isVisiable = value;
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      //to iniotiate api call function
      
  }
  getAllCuser() {
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    alert("Varibale Comp: ngOnDestroy")
  }


}
