import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./Pages/login.page";

const routes: Routes = [
    {
      path: "",
      component: LoginPage,
      data: {
        Codform: "Login",
        Description: "Login"
      }
    },
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }