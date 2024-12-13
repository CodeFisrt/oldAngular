import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car, ICarList } from '../../model/classes';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  //strongly typing 
  apiUrl = "https://freeapi.gerasim.in/api/CarRentalApp/";

  firstName: string = "asdasd";
  //lastName: string;
  
  carList: ICarList [] =[]

  carObject: Car = new Car();

  carObj: ICarList;



  constructor(private http: HttpClient) {
   this.carObj = {
    brand: '',
    carId:0,
    carImage:'',
    color:'',
    dailyRate:0,
    model:'',
    regNo:'',
    year:0
   }
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.http.get(this.apiUrl +"GetCars").subscribe((res:any)=> {
      this.carList = res.data;
    })
  }

  onEdit(editdata: any) {
   
    this.carObject = editdata;
  }

  onSave() {
   
    this.http.post(this.apiUrl +"CreateNewCar",this.carObject).subscribe((res:any)=>{
     
      if(res.result) {
        alert("Car Created Success");
        this.getCars();
      } else {
        alert(res.message)
      }
    }, error=>{
       
    })
  }
 
  updateCar() {
    this.http.put(this.apiUrl + "UpdateCar",this.carObject).subscribe((res:any)=>{
     
      if(res.result) {
        alert("Car Updated Success");
        this.getCars();
      } else {
        alert(res.message)
      }
    }, error=>{
       
    })
  }

  onDelete(data: any) {
   
    const isDelte = confirm("Are you sure4 want to Delte");
    if(isDelte) {
      const {carId} = data;
      this.http.delete(`${this.apiUrl}DeleteCarbyCarId?carid=${carId}`).subscribe((res:any)=>{
       
        if(res.result) {
          alert("Car Updated Success");
          this.getCars();
        } else {
          alert(res.message)
        }
      }, error=>{
         
      })
    }
    
  }

}
