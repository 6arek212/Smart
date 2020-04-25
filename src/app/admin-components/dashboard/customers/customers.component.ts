import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/globalServices/customers.service';
import { Customer } from 'src/app/models/Customer';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
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

  form: FormGroup
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
    this.form = new FormGroup({
      'search': new FormControl(null)
    })

    this.isLoading = true
    this.customerService.getCustomers(null, this.currentPage, this.pageSize)
    this.customersSub = this.customerService.getCustomersListener().subscribe(res => {
      console.log(res);

      this.customers = res.customers
      this.totalCustomers = res.totalCustomers
      this.calPagesNeeded()

      this.page1 = this.currentPage


        if (this.currentPage + 1 <= this.pagesNeeded)
          this.page2 = this.currentPage + 1
        else
          this.page2 = null


        if (this.currentPage + 2 <= this.pagesNeeded)
          this.page3 = this.currentPage + 2
        else
          this.page3 = null


      this.isLoading = false
    })
  }


  prevPage() {
    this.isLoading = true
    this.currentPage = this.currentPage - 1
    this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize)
  }

  nextPage() {
    this.isLoading = true
    this.currentPage = this.currentPage + 1
    this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize)
  }

  calPagesNeeded() {
    let pages = Math.round(this.totalCustomers / this.pageSize)
    console.log(this.totalCustomers, this.pageSize, pages);
    this.pagesNeeded = pages
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



  onGetingCustomers() {
    this.isLoading = true
    this.currentPage = 1
    this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize)
  }


  editCustomer(customer: Customer) {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, { data: { customer } })
  }


  onUpdatingCustomer(form: NgForm) {
    console.log(form);
  }

  onPage(num: number) {
    this.isLoading = true
    this.currentPage = num
    this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize)
  }
}
