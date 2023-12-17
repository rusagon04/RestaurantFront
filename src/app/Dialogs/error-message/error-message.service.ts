import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorMessageDialog } from './error-message.dialog';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  
  constructor(private dialog: MatDialog) { }

  openDialog(error: any){
    let dialogRef = this.dialog.open(ErrorMessageDialog, {
      minWidth: "30%",
      maxHeight: "100%",
    });

    dialogRef.componentInstance.dialogMsg = error.message;
  }
}
