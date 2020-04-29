import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { RequestDbModel } from '../models/RequestDbModel';
import { Request } from '../models/Request';
import { ClientAuthService } from '../client/services/client-auth.service';
import * as io from 'socket.io-client';
import { AuthService } from '../admin-components/services/auth.service';

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

  private socket: SocketIOClient.Socket;



  constructor(private adminAuthService: AuthService, private http: HttpClient, private clientAuthService: ClientAuthService) {
  }


  requestsSocketListener() {
    this.socket = io(environment.url + 'requests', { query: { token: this.adminAuthService.getToken() } });
    this.socket.on('requestsChanged', (data) => {
      console.log(data);
      const type = data.operationType
      const doc = data.fullDocument

      switch (type) {
        case 'insert':
          this.requests.unshift(doc)
          this.max++
          this.requestsListener.next({ requests: [...this.requests], max: this.max })
          break

        case 'update':
          const requestId = data.documentKey._id
          const updatedFields = data.updateDescription.updatedFields

          let request = this.requests.filter(doc => {
            return doc._id === requestId
          })[0]

          const newObj = {
            ...request,
            ...updatedFields
          }
          const index = this.requests.indexOf(request)

          this.requests[index] = newObj
          this.requestsListener.next({ requests: [...this.requests], max: this.max })
          break
      }
    })
  }

  ngOnDestroy(): void {
    this.socket?.close()
  }

  getRequestsListener() {
    return this.requestsListener.asObservable()
  }


  getRequestListener() {
    return this.requestListener.asObservable()
  }

  getRequests(page: number = 1, pagesize = 10, filter: string = null, search: string = null) {
    const queryParams = `?page=${page}&pagesize=${pagesize}`
    this.http.post<{ message: string, requests: Request[], max: number }>(BACKEND_URL + queryParams, { search, filter }).subscribe(res => {
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
    this.http.put<{ message: string, request: Request }>(BACKEND_URL, request).subscribe(res => {
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


  deleteRequest(request: Request, success) {
    this.http.delete<{ message: string }>(BACKEND_URL + request._id).subscribe(res => {
      const index = this.requests.indexOf(request)
      this.requests.splice(index, 1)
      this.requestsListener.next({ requests: [...this.requests], max: this.max - 1 })
      success()
    })
  }

}
