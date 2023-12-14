import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from './Microservices/Restaurant/Services/Client/client.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClientService
  ]
})
export class CoreModule { }
