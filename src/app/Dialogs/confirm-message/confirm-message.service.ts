import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmMessageDialog } from './confirm-message.dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmMessageService {
  
  constructor(private dialog: MatDialog) { }

  openDialog(msg: string){
    let dialogRef = this.dialog.open(ConfirmMessageDialog, {
      minWidth: "30%",
      maxHeight: "100%",
    });

    dialogRef.componentInstance.dialogMsg = msg;
  }
}
