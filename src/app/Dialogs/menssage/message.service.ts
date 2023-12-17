import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from './message.dialog';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private dialog: MatDialog) { }

  openDialog(msg: string){
    let dialogRef = this.dialog.open(MessageDialog, {
      minWidth: "30%",
      maxHeight: "100%",
    });

    dialogRef.componentInstance.dialogMsg = msg;
  }
}
