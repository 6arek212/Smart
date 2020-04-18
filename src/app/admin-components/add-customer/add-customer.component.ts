import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  isFormInvalid: boolean

  constructor() { }

  ngOnInit(): void {
  }


  addCustomer(form: NgForm) {
    if (form.invalid) {
      this.isFormInvalid = true
      return
    }
    this.isFormInvalid = false

  }


  checkPhoneNumber(form: NgForm, event) {

    const phone = form.controls[event.target.name]

    console.log(phone);


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
