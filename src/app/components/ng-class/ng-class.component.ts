import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  div1Class : string = '';
  isActive: boolean = false;
  div3ClassName: string = '';
  userSelecetdLang: string ='';
  langArray: string []= ['Html', 'Css','JavaScrip','Amgular','react']

  noList: number [] = [1,2,3,4,5,6,7,8,9,10]
  no: number = 5; 

  addGrrenDiv1() {
    this.div1Class = "bg-success text-white"
  }
  addRedDiv1() {
    this.div1Class = "bg-danger text-primary"
  }
  selectLanguage(langName: string) {
    this.userSelecetdLang = langName;
  }
}
