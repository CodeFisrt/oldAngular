import { Component } from '@angular/core';

@Component({
  selector: 'app-strucural-dir',
  templateUrl: './strucural-dir.component.html',
  styleUrl: './strucural-dir.component.css'
})
export class StrucuralDirComponent {

  isDiv1Visiable:  boolean = false;
  div2Visiable: string = "Yes";
  num1: string = '';
  num2: string = '';
  selectedCaste: string = '';
  startingDayChar: string = '';

isDivVisible = true;

  showDiv1() {
    this.isDiv1Visiable =  true;
  }
  hideDiv1() {
    this.isDiv1Visiable =  false;
  }
  changeDiv2() {
    // if(this.div2Visiable == "Yes") {
    //   this.div2Visiable =  "No";
    // } else {
    //   this.div2Visiable = "Yes";
    // }

    this.div2Visiable = this.div2Visiable == "Yes" ?'No':'Yes'

  }
  
}
