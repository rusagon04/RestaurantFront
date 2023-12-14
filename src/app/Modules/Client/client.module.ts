import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientPage } from './Pages/client/client.page';
import { ClientListComponent } from './Pages/client/Components/client-list/client-list.component';
import { CurrentClientComponent } from './Pages/client/Components/current-client/current-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ClientPage,
    ClientListComponent,
    CurrentClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class ClientModule { }
