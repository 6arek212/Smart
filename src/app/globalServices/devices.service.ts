import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const BACKEND_URL = environment.apiUrl + 'devices/'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private devices: { _id: string, model: string }[]
  private devicesListener = new Subject<{ _id: string, model: string }[]>()

  constructor(private http: HttpClient) { }


  getDevicesListener() {
    return this.devicesListener.asObservable()
  }

  getDevices() {
    this.http.get<{ message: string, devices: { _id: string, model: string }[] }>(BACKEND_URL).subscribe(res => {
      this.devices = res.devices
      this.devicesListener.next([...this.devices])
    })
  }


  getDevicesByCompanyId(companyId: string) {
    this.http.get<{ message: string, devices: { _id: string, model: string }[] }>(BACKEND_URL + companyId).subscribe(res => {
      this.devices = res.devices
      this.devicesListener.next([...this.devices])
    })
  }


  addDevice(model: string, released: Date, company: string) {
    return this.http.post<{ message: string }>(BACKEND_URL, { model, released ,company})
  }

}
