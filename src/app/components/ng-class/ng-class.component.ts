import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
 

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

  constructor(private router:Router,private userService: UserService) {
    this.userService.currentMode$.subscribe((modeName: string)=>{
     debugger;
    })
  }

  chnageMode() {
    this.userService.currentMode$.next("Dark")
  }

  addGrrenDiv1() {
    this.div1Class = "bg-success text-white"
  }
  addRedDiv1() {
    this.div1Class = "bg-danger text-primary"
  }
  selectLanguage(langName: string) {
    this.userSelecetdLang = langName;
  }

  navigate() {
    this.router.navigateByUrl('dataBinding')
  }
}
