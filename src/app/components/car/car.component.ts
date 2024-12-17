import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car, ICarList } from '../../model/classes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit,OnDestroy {
  
  apiUrl = "https://freeapi.gerasim.in/api/CarRentalApp/"; 
  carList: ICarList[] = [];
  carObject: Car = new Car();  

  isLoader: boolean = false;
  isApiCallInProgres: boolean = false;

  subscriptionList: Subscription[] = [];
  
   

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.isLoader = true;
    this.subscriptionList.push(this.http.get(this.apiUrl + "GetCars").subscribe((res: any) => {
      this.carList = res.data;
      this.isLoader = false;
    }))
  }

  onEdit(editdata: any) { 
    this.carObject = editdata;
  }

  onSave() { 
    if(!this.isApiCallInProgres) {
      this.isApiCallInProgres = true;
     const data = this.http.post(this.apiUrl + "CreateNewCar", this.carObject).subscribe((res: any) => { 
        if (res.result) {
          alert("Car Created Success");
          //this.getCars();
         // this.carList.push(res.data);
        } else {
          alert(res.message)
        }
        this.isApiCallInProgres = false;
      }, error => {
        this.isApiCallInProgres = false;
      })
      this.subscriptionList.push(data)
    }
   
  }

  updateCar() {
   const data = this.http.put(this.apiUrl + "UpdateCar", this.carObject).subscribe((res: any) => { 
      if (res.result) {
        alert("Car Updated Success");
        this.getCars();
      } else {
        alert(res.message)
      }
    }, error => {

    })
    this.subscriptionList.push(data)
  }

  onDelete(data: any) { 
    const isDelte = confirm("Are you sure4 want to Delte");
    if (isDelte) {
      const { carId } = data;
      this.http.delete(`${this.apiUrl}DeleteCarbyCarId?carid=${carId}`).subscribe((res: any) => { 
        if (res.result) {
          alert("Car Updated Success");
          //this.getCars();
         // const carIndex = this.carList.indexOf(data);
          debugger;
          //const carindex = this.carList.findIndex(m=>m.carId ==carId)
         // this.carList.splice(carindex,1)
          debugger; 
          debugger;
        } else {
          alert(res.message)
        }
      }, error => {

      })
    }

  }
  ngOnDestroy(): void {
     this.subscriptionList.forEach(element => {
      element.unsubscribe()
     });
  }

}
