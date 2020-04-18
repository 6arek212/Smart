import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<DialogMessageComponent>, @Inject(MAT_DIALOG_DATA) public data: { buttons: boolean, title: string, message: string, confirm: Function, cancel: Function }) { }

  ngOnInit(): void {
  }


  onConfirm() {
    if (this.data.confirm)
      this.data.confirm()
    this.dialogRef.close(true)
  }

  onCancel() {
    if (this.data.cancel)
      this.data.cancel()
  }
}
