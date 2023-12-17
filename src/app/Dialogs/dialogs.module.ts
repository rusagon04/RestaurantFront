import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageService } from './menssage/message.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmMessageDialog } from './confirm-message/confirm-message.dialog';
import { ErrorMessageDialog } from './error-message/error-message.dialog';
import { MessageDialog } from './menssage/message.dialog';



@NgModule({
  declarations: [
    MessageDialog,
    ConfirmMessageDialog,
    ErrorMessageDialog
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FontAwesomeModule,
  ],
  providers: [
    MessageService,
  ]
})
export class DialogsModule { }
