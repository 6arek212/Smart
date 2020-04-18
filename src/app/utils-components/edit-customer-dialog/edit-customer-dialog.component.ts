import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/models/Customer';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from 'src/app/globalServices/customers.service';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent implements OnInit {
  cities
  citiesSub: Subscription
  form: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: { customer: Customer },
    private citiesService: CitiesService,
    private customerService: CustomersService,
    private dialogRef: MatDialogRef<EditCustomerDialogComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'firstName': new FormControl(this.data.customer.firstName),
      'lastName': new FormControl(this.data.customer.lastName),
      'city': new FormControl(this.data.customer.city._id),
      'phone': new FormControl(this.data.customer.phone)
    })

    this.citiesService.getCites()
    this.citiesSub = this.citiesService.getCitiesListener().subscribe(res => {
      this.cities = res
      this.form.get('city').setValue(this.data.customer.city._id)
    })
  }




  onUpdate() {
    const updateOps = []

    const hash = Object.keys(this.form.value).map(name => ({ name, value: this.form.value[name] }))

    for (let i = 0, k = 0; i < hash.length; i++) {
      if (hash[i].value != this.data.customer[hash[i].name] && hash[i].value != this.data.customer[hash[i].name]?._id) {
        updateOps[k++] = {
          'name': hash[i].name,
          'value': hash[i].value
        }
      }
    }

    this.customerService.updateCustomer(this.data.customer, updateOps)
    this.dialogRef.close()
  }


  ngOnDestroy(): void {
    this.citiesSub.unsubscribe()
  }

}
