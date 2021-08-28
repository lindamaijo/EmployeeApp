import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';




 const appRoutes=[
 {path:'',component:EmployeesComponent},
 {path:"edit/:id",component:EmployeeEditComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    EmployeeEditComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
 
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
