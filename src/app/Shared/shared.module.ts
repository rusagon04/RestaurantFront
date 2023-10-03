import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LayoutPage } from "./Pages/layout/layout.page";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      LayoutPage
    ],
    imports: [
      CommonModule, 
      RouterModule, 
      ReactiveFormsModule,
    ],
    exports: []
  })
  export class SharedModule { }
  