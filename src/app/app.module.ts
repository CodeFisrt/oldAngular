import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { VariableComponent } from './components/variable/variable.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StrucuralDirComponent } from './components/strucural-dir/strucural-dir.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    VariableComponent,
    DataBindingComponent,
    StrucuralDirComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
