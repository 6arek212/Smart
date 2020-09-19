import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const BACKEND_URL = environment.apiUrl + 'devices/'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private devices: { _id: string, model: string, image: string, released: Date }[]
  private devicesListener = new Subject<{ _id: string, model: string, image: string, released: Date }[]>()

  constructor(private http: HttpClient) { }


  getDevicesListener() {
    return this.devicesListener.asObservable()
  }

  getDevices() {
    this.http.get<{ message: string, devices: { _id: string, model: string, image: string, released: Date }[] }>(BACKEND_URL).subscribe(res => {
      this.devices = res.devices
      this.devicesListener.next([...this.devices])
      console.log(this.devices);

    })
  }


  getDevicesByCompanyId(companyId: string) {
    this.http.get<{ message: string, devices: { _id: string, model: string, image: string, released: Date }[] }>(BACKEND_URL + companyId).subscribe(res => {
      this.devices = res.devices
      this.devicesListener.next([...this.devices])
    })
  }


  addDevice(model: string, released: Date, company: string, image: File = null) {
    const data = new FormData()
    data.append('model', model)
    data.append('released', released.toString())
    data.append('company', company)
    data.append('image', image, model)

    return this.http.post<{ message: string }>(BACKEND_URL, data)
  }




  updateDevice(id: string, model: string, released: Date, company: string, image: File = null) {
    const data = new FormData()
    data.append('model', model)
    data.append('released', released.toString())
    data.append('company', company)
    if (image && image instanceof File)
      data.append('image', image, model)

    return this.http.patch<{ message: string }>(BACKEND_URL + id, data)
  }
}
