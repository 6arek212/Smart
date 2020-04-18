import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { Subscription } from 'rxjs';
import { ClientInfoService } from '../../services/client-info.service';
import { Customer } from 'src/app/models/Customer';
import { MatDialog } from '@angular/material/dialog';
import { EditPhoneDialogComponent } from 'src/app/utils-components/edit-phone-dialog/edit-phone-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { selectInput, nameCheck } from '../../../utils-components/validators'
import { ClientAuthService } from '../../services/client-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css'],
  providers: [CitiesService, ClientInfoService]
})
export class ClientProfileComponent implements OnInit {
  cities
  citiesSub: Subscription
  customer: Customer
  form: FormGroup
  isLoading: boolean = false

  constructor(private _snackBar: MatSnackBar, private citiesService: CitiesService, private clientAuth: ClientAuthService, private clientInfoService: ClientInfoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(this.customer?.firstName, { validators: [Validators.required], asyncValidators: [nameCheck] }),
      lastName: new FormControl(this.customer?.lastName, { validators: [Validators.required], asyncValidators: [nameCheck] }),
      city: new FormControl({value: this.customer?.city, disabled: true}, { asyncValidators: [selectInput] }),
    })

    this.citiesService.getCites()
    this.citiesSub = this.citiesService.getCitiesListener().subscribe(data => {
      this.cities = data
    })


    this.clientInfoService.getCustomerDetails().subscribe(res => {
      this.customer = res.customer
      this.form.setValue({
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        city: this.customer.city._id
      })
      this.form.updateValueAndValidity()
    })

  }



  editPhone() {
    const ref = this.dialog.open(EditPhoneDialogComponent, { panelClass: 'myapp-no-padding-dialog' })
    ref.afterClosed().subscribe(res => {
      if (res)
        this.customer.phone = res
    })
  }




  onUpdate() {
    if (this.form.invalid)
      return

    this.isLoading = true

    const updateOps = []

    const hash = Object.keys(this.form.value).map(name => ({ name, value: this.form.value[name] }))

    for (let i = 0, k = 0; i < hash.length; i++) {
      if (hash[i].value != this.customer[hash[i].name] && hash[i].value != this.customer[hash[i].name]?._id) {
        updateOps[k++] = {
          'name': hash[i].name,
          'value': hash[i].value
        }
      }
    }


    if (updateOps.length > 0)
      this.clientInfoService.updateCustomer(updateOps).subscribe(res => {
        this.clientAuth.updateUserData(res.customer)
        this.customer = res.customer
        this.isLoading = false
      }, err => {
        this.isLoading = false
      })
    else {
      this.openSnackBar('لم تقم بتعديل اي حقل !', null)
      this.isLoading = false
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  ngOnDestroy(): void {
    this.citiesSub.unsubscribe()
  }

}
