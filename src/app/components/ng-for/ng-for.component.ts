import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string [] = [ "Pune", "Nagpur" ,"Jabalpur","Mumbai"]
    cityName: string = '';
    alert: string = "Warning";
    messgaghe: string = 'This is Welcome Message';

  studentList : any [] = [
    {studId:13, isActive:false, name: 'AAA',mobile: '1111111'},
    {studId:34, isActive:true, name: null,city:'Mumbai',mobile: '2223333'},
    {studId:54, isActive:false, name: 'CCC',city:'Pune',mobile: ''}
  ];
  constructor(public router: Router) {

  }

  addEmpl() {
    this.studentList.push({
      studId:15, isActive:false, name: 'FFFF',mobile: '334455'
    })
  }


  navigate() {
    this.router.navigateByUrl('/createEmployee/'+333)
    this.router.navigate(['/createEmployee',444])
  }

  addCity() {
    const isCityExist = this.cityList.find(x=> x == this.cityName)
   
    if(isCityExist == undefined) {
      this.cityList.push(this.cityName)
    } else {
      alert("City Alredy Present")
    }
  }
}
