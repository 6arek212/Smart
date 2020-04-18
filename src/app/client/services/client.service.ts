import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../admin-components/services/auth.service';
import * as io from 'socket.io-client'
import { RequestDbModel } from 'src/app/models/RequestDbModel';

const BACKEND_URL = environment.apiUrl + 'client/'


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private requests = []
  private requestUpdate = new Subject<Request[]>()
  socket: any

  constructor(private http: HttpClient,private auth:AuthService) {

  }

  ngOnDestroy(): void {
    this.socket?.removeAllListeners()
    this.socket?.disconnect()
  }


  attachRequestsListener() {
    this.socket = io.connect(environment.url,{query:{token:this.auth.getToken()}});
    this.requestsSub()
  }



  private requestsSub() {
    this.socket.on('changeData', data => {
      const { operationType } = data
      const _id: string = data.documentKey._id
      let request
      switch (operationType) {
        //Insert Method

        case 'insert':
          request = data.fullDocument
          this.requests.unshift(request)
          this.requestUpdate.next([...this.requests])
          break


        //Update Method
        case 'update':
          const updatedFields = data.updateDescription.updatedFields

          request = this.getRequestLocalById(_id)

          if (request) {
            const filedNames = Object.keys(updatedFields)
            const filedValues = Object.values(updatedFields)

            filedNames.forEach((key, index) => {
              request[key] = filedValues[index]
            });
            console.log('updated');

          }
          break

        case 'delete':
          request = this.getRequestLocalById(_id)
          console.log(request);

          this.requests.splice(this.requests.indexOf(request), 1)
          this.requestUpdate.next([...this.requests])
          break
      }

    })

  }






  // requestsSub() {
  //    this.socket.fromEvent<any>('changeData').subscribe(data => {
  //     const { operationType } = data
  //     const _id: string = data.documentKey._id
  //     let request
  //     switch (operationType) {
  //       //Insert Method

  //       case 'insert':
  //         request = data.fullDocument
  //         this.requests.unshift(request)
  //         this.requestUpdate.next([...this.requests])
  //         break


  //       //Update Method
  //       case 'update':
  //         const updatedFields = data.updateDescription.updatedFields

  //         request = this.getRequestLocalById(_id)

  //         if (request) {
  //           const filedNames = Object.keys(updatedFields)
  //           const filedValues = Object.values(updatedFields)

  //           filedNames.forEach((key, index) => {
  //             request[key] = filedValues[index]
  //           });
  //           console.log('updated');

  //         }
  //         break

  //       case 'delete':
  //         request = this.getRequestLocalById(_id)
  //         console.log(request);

  //         this.requests.splice(this.requests.indexOf(request),1)
  //         this.requestUpdate.next([...this.requests])
  //         break
  //     }

  //   })

  // }


  // socketSub(){
  //   this.requestsSub()
  // }

  // socketUnSub(){
  //   this.socket.removeAllListeners()
  // }


  private getRequestLocalById(id: string) {
    return this.requests.filter(req => {
      return req._id === id
    })[0]
  }







  addRequest(request) {
    return this.http.post(BACKEND_URL, request)
  }


  getRequests() {
    this.http.get<{ message: string, requests }>(BACKEND_URL).subscribe(res => {
      this.requests = res.requests
      this.requestUpdate.next([...this.requests])
    })
  }

  getRequestsListener(): Observable<Request[]> {
    return this.requestUpdate.asObservable()
  }


  deleteRequest(id: string) {
    this.http.delete(BACKEND_URL + id).subscribe(res => {
      // const newArray = this.requests.filter(req => {
      //   return req._id !== id
      // })
      // this.requests = newArray
      // this.requestUpdate.next([...this.requests])
    })
  }


  changeRequestStatus(status: boolean, id: string) {
    this.http.put(BACKEND_URL + id, { status }).subscribe(res => {
    })
  }
}
