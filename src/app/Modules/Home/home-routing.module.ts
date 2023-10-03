import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './Pages/home.page';
import { LayoutPage } from 'src/app/Shared/Pages/layout/layout.page';

const routes: Routes = [
  {
    path:"",
    component: LayoutPage,
    children:[
      {
        path:"",
        component: HomePage,
        data:{
          Codform: "Home",
          Description: "Home",
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
