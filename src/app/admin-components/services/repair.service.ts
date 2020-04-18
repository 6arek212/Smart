import { Injectable } from '@angular/core';
import { Repair } from '../../models/Repair';
import { Customer } from '../../models/Customer';
import { Device } from '../../models/Device';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL=environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  isLoading =new Subject<boolean>()

  constructor(private http: HttpClient , private router:Router) { }

  getIsLoading(){
    return this.isLoading.asObservable()
  }


  getRepairs(): Repair[] {
    return [
      {
        _id: "1", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: true,
        customer: new Customer(), device: new Device()
      },
      {
        _id: "2", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: false,
        customer: new Customer(), device: new Device()
      },
      {
        _id: "2", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: false,
        customer: new Customer(), device: new Device()
      },
      {
        _id: "2", notes: "this device needs alot of things", price: 500.5, problems: ["1", "2", "3"], createdAt: new Date(), status: false,
        customer: new Customer(), device: new Device()
      }
    ]
  }

  devicesModels = [{ _id: '1', model: "iPhone X" },
  { _id: '2', model: "Galaxy S20" }]


  getDeviceModelByCompanyID(id: string) {
    return this.http.get<{ message: string, devices: Device[] }>(BACKEND_URL + 'devices/' + id)
  }

  getDeviceCompanies() {
    return this.http.get<{ message: string, companies: { name: string, _id: string }[] }>(BACKEND_URL + "companies")
  }




  addRepair(repair: {
    customer: string, devices: {
      company: string,
      device: string,
      notes: string,
      price: number
    }[]
  }) {

    this.isLoading.next(true)
    this.http.post(BACKEND_URL+ 'repairs', repair).subscribe(data => {
      console.log(data);
      this.isLoading.next(false)
      this.router.navigate(['/admin'])
    })

  }

}
