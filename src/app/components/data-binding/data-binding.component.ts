import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Chetan";
  productPrice: number = 1200.56;
  currentDate: Date = new Date();

  inputType : string = "number";
  className: string = "col-4 bg-danger";
  noOfRow: number = 3;
  courseName: string = 'Angular';
  selectedCountry: string = '';
 
  studentObj: any = {
    name: '',
    city:'',
    address: ''
  }

  onFruntSelect(fruiitName: string) {
    debugger;
  }

  showAlert(message: string) {
    alert(message)
  }

  showAlertMessage() {
    alert("HUIUU")
  }

  

   
}
