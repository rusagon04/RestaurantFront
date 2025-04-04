import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LayoutPage } from "./Pages/layout/layout.page";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LayoutMenuComponent } from './Pages/layout/Components/layout-menu/layout-menu.component';
import { LayoutMenuItemComponent } from './Pages/layout/Components/layout-menu-item/layout-menu-item.component';
import { InputComponent } from './Components/input/input.component';
import { ConfirmButtonComponent } from './Components/confirm-button/confirm-button.component';
import { CancelButtonComponent } from './Components/cancel-button/cancel-button.component';

@NgModule({
    declarations: [
      LayoutPage,
      LayoutMenuComponent,
      LayoutMenuItemComponent,
      InputComponent,
      ConfirmButtonComponent,
      CancelButtonComponent
    ],
    imports: [
      CommonModule, 
      RouterModule, 
      ReactiveFormsModule,
      FontAwesomeModule
    ],
    exports: [
      InputComponent,
      ConfirmButtonComponent,
      CancelButtonComponent
    ]
  })
  export class SharedModule { }
  