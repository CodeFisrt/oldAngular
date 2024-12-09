import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css', 
})
export class CreateEmployeeComponent implements OnInit ,AfterViewInit{


  numberPattenr = "^[0-9]*$"
  queryId: number = 0;

  employeeObj: any = {
    empName: '',
    contactNo: '',
    email: '',
    department: 'IT',
    role: 'User',
    password: ''
  } 
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (res:any) => {
      debugger;
      this.queryId =  res.id;
    })
   const data =  this.activatedRoute.snapshot ;
   debugger;
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const nameTextbox = document.getElementById("txtName");
      if(nameTextbox != null) {
        nameTextbox.focus()
      }
    }, 5000);
   
  }

  onSaveEmployee () {
    debugger;
    const formValue = this.employeeObj
  }
}
