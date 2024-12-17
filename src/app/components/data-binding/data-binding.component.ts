import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { AlertComponent } from '../../shared/alert/alert.component';
import { BtnGroupComponent } from '../../shared/btn-group/btn-group.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  @ViewChild ('studName') nameTextbox: ElementRef  | undefined;

  @ViewChild(BtnGroupComponent) btnGroupCompo:BtnGroupComponent | undefined;

  firstName: string = ""; 
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

  getValue() {
    // const textRef  = document.getElementById("txtName")  as HTMLElement;
    // if(textRef != null) {
    //   const textName = textRef['value'];
    // }
    if(this.nameTextbox) {
      const studNAme =  this.nameTextbox?.nativeElement.value;
      this.nameTextbox.nativeElement.style.color ="red";
    }
    if(this.btnGroupCompo) {
    const btnComp =  this.btnGroupCompo?.firstName;
    this.btnGroupCompo.firstName = "Ankit"
    }

    debugger;
  }

  onFruntSelect(fruiitName: string) {
   
  }

  showAlert(message: string) {
    alert(message)
  }

  showAlertMessage() {
    alert("HUIUU")
  }

  

   
}
