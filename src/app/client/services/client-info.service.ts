import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientAuthService } from './client-auth.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/models/Customer';

const BACKEND_URL = environment.apiUrl + 'customers/'


@Injectable({
  providedIn: 'root'
})
export class ClientInfoService {
  private requestsStatics: { name: string, value: number }[]
  private requestsStaticsListener = new Subject<{ name: string, value: number }[]>()
  private numOfRequests: number
  private paginationStaticsListener = new Subject<number>()

  constructor(private http: HttpClient, private clientAuthService: ClientAuthService) {
  }



  getPaginationStaticsListener() {
    return this.paginationStaticsListener.asObservable()
  }

  getStatistics() {
    return this.requestsStatics
  }

  getClientRequestsStaticsListener() {
    return this.requestsStaticsListener.asObservable()
  }



  getClientRequestsStatics() {
    this.http.get<{ message: string, data: { numOfRequests: number, numOfDoneRequests: number } }>
      (BACKEND_URL + 'getRequestsStatics/' + this.clientAuthService.getUser()._id)
      .pipe(map((res) => {
        return {
          data: Object.keys(res.data).map(name => {
            let newName
            if (name == 'numOfRequests') {
              newName = 'בקשות'
            }
            else if (name == 'numOfDoneRequests') {
              newName = 'בקשות מוכנות'
            }

            return { name: newName, value: res.data[name] }
          }),
          numOfRequests: res.data.numOfRequests,
          numOfDoneRequests: res.data.numOfDoneRequests,
          message: res.message
        }
      }))
      .subscribe(res => {
        this.requestsStatics = res.data
        this.requestsStaticsListener.next([...this.requestsStatics])
        this.numOfRequests = res.numOfRequests
        this.paginationStaticsListener.next(this.numOfRequests)
      })
  }



  getCustomerDetails() {
    return this.http.get<{ message: string, customer: Customer }>(BACKEND_URL + this.clientAuthService.getUser()._id)
  }


  updateCustomer(updateOps) {
    return this.http.patch<{ message: string, customer: Customer }>(BACKEND_URL + this.clientAuthService.getUser()._id, updateOps)
  }

}
