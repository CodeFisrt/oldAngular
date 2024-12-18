import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveUserComponent } from './components/reactive-user/reactive-user.component';
import { StrucuralDirComponent } from './components/strucural-dir/strucural-dir.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { VariableComponent } from './components/variable/variable.component';
import { UserAppComponent } from './components/user-app/user-app.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
    path: "dataBinding",
    component: DataBindingComponent
  },
  {
    path: 'ng-class',
    component: NgClassComponent
  },
  {
    path: 'ngFor',
    component: NgForComponent
  },
  {
    path: 'employeeList',
    component: EmployeeListComponent
  },
  {
    path: 'createEmployee/:id',
    component: CreateEmployeeComponent 
  },
   {
    path: 'createEmployee',
    component: CreateEmployeeComponent 
  },{
    path: 'user',
    component: UserComponent 
  },{
    path: 'reactive-user',
    component: ReactiveUserComponent 
  },
  {
    path: 'structurtal',
    component: StrucuralDirComponent 
  },
  {
    path: 'pipes',
    component: PipesComponent 
  },{
    path: 'variable',
    component: VariableComponent 
  },{
    path: 'userapp',
    component: UserAppComponent 
  },
  {
    path: 'car',
    component: CarComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
