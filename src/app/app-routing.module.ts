import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashbaordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }