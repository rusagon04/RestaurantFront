import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "/Login",
        pathMatch: "full",
      },
      {
        path: "Login",
        loadChildren: () =>
          import("./Modules/Login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "Home",
        loadChildren: () =>
          import("./Modules/Home/home.module").then((m) => m.HomeModule)
      },
      {
        path: "Client",
        loadChildren: () =>
          import("./Modules/Client/client.module").then((m) => m.ClientModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
