import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { RequestDbModel } from '../models/RequestDbModel';
import { Request } from '../models/Request';
import { ClientAuthService } from '../client/services/client-auth.service';


const BACKEND_URL = environment.apiUrl + 'requests/'

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private requests: Request[] = []
  private requestsListener = new Subject<{ requests: Request[], max: number }>()
  private max: number

  private request: Request
  private requestListener = new Subject<Request>()

  constructor(private http: HttpClient, private clientAuthService: ClientAuthService) { }


  getRequestsListener() {
    return this.requestsListener.asObservable()
  }


  getRequestListener() {
    return this.requestListener.asObservable()
  }

  getRequests(page: number = 1, pagesize = 10, filter: string = null, search: string = null) {
    const queryParams = `?page=${page}&pagesize=${pagesize}&search=${search}&filter=${filter}`

    this.http.get<{ message: string, requests: Request[], max: number }>(BACKEND_URL + queryParams).subscribe(res => {
      this.requests = res.requests
      this.max = res.max
      this.requestsListener.next({ requests: [...this.requests], max: res.max })
    })
  }


  getRequestsByCustomerId(page: number = 1, pagesize = 10) {
    const customerId = this.clientAuthService.getUser()._id
    const queryParams = `requestsByCustomerId?page=${page}&pagesize=${pagesize}&customerId=${customerId}`

    this.http.get<{ message: string, requests: Request[] }>(BACKEND_URL + queryParams).subscribe(res => {
      this.requests = res.requests
      this.requestsListener.next({ requests: [...this.requests], max: null })
    })
  }


  getRequestById(requestId: string) {
    const userId = this.clientAuthService.getUser()._id
    const queryParams = `getRequest?customerId=${userId}&requestId=${requestId}`
    this.http.get<{ message: string, request: Request }>(BACKEND_URL + 'getRequest/' + queryParams).subscribe(res => {
      this.request = res.request
      this.requestListener.next({ ...this.request })
    })
  }


  addRequest(request: RequestDbModel, error: Function, success: Function) {
    this.http.post<{ message: string, request: Request }>(BACKEND_URL, request).subscribe(res => {
      console.log(res);

      this.requests.push(res.request)
      this.requestsListener.next({ requests: [...this.requests], max: this.max + 1 })
      success()
    }, err => {
      error()
    })
  }



  updateReuqest(requestId: string, updateOp) {
    return this.http.patch<{ message: string }>(BACKEND_URL + requestId, updateOp)
  }


  deleteRequest(requestId: string, success) {
    this.http.delete<{ message: string }>(BACKEND_URL + requestId).subscribe(res => {
      const newArray = this.requests.filter(req => {
        return req._id !== requestId
      })
      this.requests = newArray
      this.requestsListener.next({ requests: [...this.requests], max: this.max - 1 })
      success()
    })
  }

}
