import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: "<ul><li class='text-primary'>ABC </li><li class='text-danger'>DEF </li><li>MNO </li> </ul><button> </button>",
  styles: ['.text-primary{color:blue}','.text-danger {color:red}']
})
export class EmployeeListComponent {

}
