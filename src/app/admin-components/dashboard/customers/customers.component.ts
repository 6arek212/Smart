import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/globalServices/customers.service';
import { Customer } from 'src/app/models/Customer';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
import { NgForm } from '@angular/forms';
import { EditCustomerDialogComponent } from 'src/app/utils-components/edit-customer-dialog/edit-customer-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  page1 = 1
  page2 = null
  page3 = null


  updatePagesNum = false

  currentPage = 1
  pageSize = 10
  pagesNeeded: number
  totalCustomers = 0

  customers: Customer[]
  customersSub: Subscription
  editCustomerId: string

  isLoading = false

  constructor(private customerService: CustomersService, private dialog: MatDialog) { }

  ngOnInit(): void {

    if (2 < this.pagesNeeded)
      this.page2 = 2

    if (3 < this.pagesNeeded)
      this.page3 = 3

    this.isLoading = true
    this.customerService.getCustomers()
    this.customersSub = this.customerService.getCustomersListener().subscribe(res => {
      this.customers = res.customers
      this.totalCustomers = res.totalCustomers
      this.calPagesNeeded()

      if (this.updatePagesNum) {
        if (this.page1 < this.pagesNeeded)
          this.page1++
        if (this.page2 < this.pagesNeeded)
          this.page2++

        if (this.page2 < this.pagesNeeded)
          this.page2++
        this.updatePagesNum = false
      }

      this.isLoading = false
    })
  }


  calPagesNeeded() {
    let pages = Math.round(this.totalCustomers / this.pageSize)

    if (this.totalCustomers % 10 != 0)
      pages++

    console.log(pages);
  }


  onDeleteCustomer(customer: Customer) {

    const confirm = () => {
      this.customerService.deleteCustomer(customer)
      this.dialog.closeAll()
    }

    this.dialog.open(DialogMessageComponent, {
      data: {
        buttons: true, title: 'حذف زبون',
        message: ' ?' + ' هل أنت متأكد من حذف الزبون ' + customer.firstName + ' ' + customer.lastName, confirm
      }
    })
  }



  onGetingCustomers(search: HTMLInputElement) {
    this.isLoading = true
    this.customerService.getCustomers(search.value)
  }


  editCustomer(customer: Customer) {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, { data: { customer } })
  }


  onUpdatingCustomer(form: NgForm) {
    console.log(form);
  }

  onPage(num: number) {
    this.updatePagesNum = true
    this.customerService.getCustomers(null, this.currentPage, this.pageSize)
  }
}
