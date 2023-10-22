import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LayoutPage } from "./Pages/layout/layout.page";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LayoutMenuComponent } from './Pages/layout/Components/layout-menu/layout-menu.component';
import { LayoutMenuItemComponent } from './Pages/layout/Components/layout-menu-item/layout-menu-item.component';

@NgModule({
    declarations: [
      LayoutPage,
      LayoutMenuComponent,
      LayoutMenuItemComponent
    ],
    imports: [
      CommonModule, 
      RouterModule, 
      ReactiveFormsModule,
      FontAwesomeModule
    ],
    exports: []
  })
  export class SharedModule { }
  