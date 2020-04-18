import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersService } from '../../globalServices/customers.service';
import { Customer } from '../../models/Customer';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pick-customer',
  templateUrl: './pick-customer.component.html',
  styleUrls: ['./pick-customer.component.css']
})
export class PickCustomerComponent implements OnInit {
  customers: Customer[]
  constructor(private cutomerService: CustomersService) { }

  ngOnInit(): void {
    this.cutomerService.getCustomers()
  }




  onSearch(event: NgModel) {
    const ref=this.cutomerService.getCustomers(event.value)


  }
}
