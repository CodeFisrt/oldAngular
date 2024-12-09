import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VariableComponent } from './components/variable/variable.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StrucuralDirComponent } from './components/strucural-dir/strucural-dir.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { UserComponent } from './components/user/user.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveUserComponent } from './components/reactive-user/reactive-user.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { BtnGroupComponent } from './shared/btn-group/btn-group.component';
import { MyTableComponent } from './shared/my-table/my-table.component';
import { NaPipe } from './pipes/na.pipe';
import { HightlightDirective } from './directive/hightlight.directive';
import { AutoFocusDirective } from './directive/auto-focus.directive';
import { OnScrollDirective } from './directive/on-scroll.directive';
import { UserAppComponent } from './components/user-app/user-app.component';
import { customInterceptor } from './intercepto/custom.interceptor';
 
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
    NgStyleComponent,
    UserComponent,
    ReactiveUserComponent,
    PipesComponent,
    AlertComponent,
    ProgressBarComponent,
    BtnGroupComponent,
    MyTableComponent,
    NaPipe,
    HightlightDirective,
    AutoFocusDirective,
    OnScrollDirective,
    UserAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormsModule, provideHttpClient(withInterceptors([customInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
