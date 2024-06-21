import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputModule, ButtonModule } from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from 'carbon-components-angular';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbaordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule, 
    ButtonModule,
    FormsModule,
    ReactiveFormsModule  ,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }