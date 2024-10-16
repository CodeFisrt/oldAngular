import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';

const routes: Routes = [
  {
    path: "dataBinding",
    component:DataBindingComponent
  },
  {
    path:'ng-class',
    component:NgClassComponent
  },
  {
    path:'ngFor',
    component:NgForComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
