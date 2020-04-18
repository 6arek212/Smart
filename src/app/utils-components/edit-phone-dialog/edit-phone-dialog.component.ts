import { Component, OnInit } from '@angular/core';
import { PhoneAuthService } from '../phone-auth/phone-auth.service';
import { ClientInfoService } from 'src/app/client/services/client-info.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-phone-dialog',
  templateUrl: './edit-phone-dialog.component.html',
  styleUrls: ['./edit-phone-dialog.component.css'],
  providers: [PhoneAuthService, ClientInfoService]
})
export class EditPhoneDialogComponent implements OnInit {
  phoneNumber

  constructor(private clientService: ClientInfoService,
    private dialogRef: MatDialogRef<EditPhoneDialogComponent>) { }


  ngOnInit(): void {
  }


  onChangePhoneNumber(e) {
    console.log(e);
    const updateOps = [
      { name: 'phone', value: e }
    ]

    this.clientService.updateCustomer(updateOps).subscribe(res => {
      console.log(res);
      this.dialogRef.close(e)
    })
  }

}
