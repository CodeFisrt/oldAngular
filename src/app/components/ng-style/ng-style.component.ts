import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  div1BckColor: string = '';
  divFontColor: string = "White";
  isActive:boolean = false;

  
  myStye: any = {
    color: 'red',
    'background-color':'green',
    'font-size':'32px'
  }
 

  
  adDiv1Color(color: string) {
    this.div1BckColor = color;
    this.myStye['background-color'] = color
  }
}
