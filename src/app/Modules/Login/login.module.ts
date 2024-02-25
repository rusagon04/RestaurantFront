import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './Pages/login.page';
import { LoginRoutingModule } from './login-routing.module';
import { LoginCurrentComponent } from './Pages/Components/login-current/login-current.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/Shared/shared.module';
import { LoginCurrentFormComponent } from './Pages/Components/login-current-form/login-current-form.component';

@NgModule({
  declarations: [
    LoginPage,
    LoginCurrentComponent,
    LoginCurrentFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
