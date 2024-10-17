import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css', 
})
export class CreateEmployeeComponent {


  queryId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (res:any) => {
      debugger;
      this.queryId =  res.id;
    })
   const data =  this.activatedRoute.snapshot ;
   debugger;
  }
}
