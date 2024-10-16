import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string [] = [ "Pune", "Nagpur" ,"Jabalpur","Mumbai"]
  cityName: string = '';

  studentList : any [] = [
    {studId:13, isActive:false, name: 'AAA',city:'Pune',mobile: '1111111'},
    {studId:34, isActive:true, name: 'BBB',city:'Mumbai',mobile: '2223333'},
    {studId:54, isActive:false, name: 'CCC',city:'Pune',mobile: '55566677'}
  ];


  addCity() {
    const isCityExist = this.cityList.find(x=> x == this.cityName)
    debugger;
    if(isCityExist == undefined) {
      this.cityList.push(this.cityName)
    } else {
      alert("City Alredy Present")
    }
  }
}
