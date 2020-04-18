import { Component, OnInit } from '@angular/core';
import { RepairService } from 'src/app/admin-components/services/repair.service';
import { Device } from 'src/app/models/Device';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/client/services/client.service';
import { PhoneAuthService } from 'src/app/utils-components/phone-auth/phone-auth.service';


@Component({
  selector: 'app-client-add-repair',
  templateUrl: './client-add-repair.component.html',
  styleUrls: ['./client-add-repair.component.css'],
  providers: [ClientService]
})
export class ClientAddRepairComponent implements OnInit {
  companies: { _id: string, name: string }[]
  devicesModel: Device[]
  isLoading = false
  isSubmited = false
  phoneNumberData

  constructor(private clientService: ClientService, private phoneService: PhoneAuthService) { }

  ngOnInit(): void {
    this.phoneNumberData = this.phoneService.getPhoneNumberAndCountryCode()
  }


  onAddingRequest(form: NgForm) {
    if (form.invalid)
      return

    const req = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      title: form.value.title,
      phoneAuthId: this.phoneService.getPhoneAuthId(),
      phone: this.phoneNumberData.phoneNumber,
      countryCode: this.phoneNumberData.countryCode,
      notes: form.value.notes
    }

    this.isLoading = true
    this.clientService.addRequest(req).subscribe(res => {
      this.isLoading = false
      this.isSubmited = true
    })

    this.phoneService.ngOnDestroy()
  }


  checkPhoneNumber(form: NgForm, event) {
    const phone = form.controls[event.target.name]
    if (!phone) {
      return
    }

    var isnum = /^\d+$/.test(phone.value);

    if (!isnum)
      phone.setErrors({
        ...phone.errors,
        phoneNumber: true
      })
  }
}
