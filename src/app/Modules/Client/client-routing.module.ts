import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPage } from 'src/app/Shared/Pages/layout/layout.page';
import { ClientPage } from './Pages/client/client.page';

const routes: Routes = [
  {
    path:"",
    component: LayoutPage,
    children:[
      {
        path:"",
        component: ClientPage,
        data:{
          Codform: "Client",
          Description: "Cliente"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
