import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const BACKEND_URL = environment.apiUrl + 'customers/'


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customers: Customer[]
  private customersListener = new Subject<{ customers: Customer[], totalCustomers }>()
  private totalCustomers: number

  constructor(private http: HttpClient) { }


  getCustomersListener() {
    return this.customersListener.asObservable()
  }



  getCustomers(search: string = null, page: number = 1, pagesize = 10) {
    const queryParams = `?page=${page}&pagesize=${pagesize}`

    this.http.post<{ message: string, customers: Customer[], totalCustomers }>(BACKEND_URL + 'search' + queryParams, { search }).subscribe(data => {
      this.totalCustomers = data.totalCustomers
      this.customers = data.customers
      this.customersListener.next({ customers: [...this.customers], totalCustomers: this.totalCustomers })
    })
  }


  deleteCustomer(customer: Customer) {
    this.http.delete<{ message: string }>(BACKEND_URL + customer._id).subscribe(res => {
      console.log('deleted customer', res);

      const index = this.customers.indexOf(customer)
      console.log(index);
      this.customers.splice(index, 1)
      this.customersListener.next({ customers: [...this.customers], totalCustomers: this.totalCustomers })
    }, err => {
      console.log(err);

    })
  }




  updateCustomer(customer: Customer, updateOps) {
    this.http.patch<{ message: string, customer: Customer }>(BACKEND_URL + customer._id, updateOps).subscribe(res => {
      //console.log(this.customers);
      const index = this.customers.indexOf(customer)
      if (index !== -1) {

        console.log(res.customer);
        console.log(index);

        this.customers[index] = res.customer
        this.customersListener.next({ customers: [...this.customers], totalCustomers: this.totalCustomers })

      }


    }, err => {
      console.log(err);
    })
  }


}
