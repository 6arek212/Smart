import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { NumOf } from 'src/app/models/NumOf';
import { Analytics } from 'src/app/models/Analytics';
import * as io from 'socket.io-client';
import { AuthService } from '../services/auth.service';

const BACKEND = environment.apiUrl + "analytics"

@Injectable({
  providedIn: 'root'
})
export class StaticsService {
  private numOf: NumOf[] = []
  private numOfSub = new Subject<NumOf[]>()

  private analytics: Analytics[] = []
  private analyticsSub = new Subject<Analytics[]>()


  private socket: SocketIOClient.Socket;
  private numOfSocket: SocketIOClient.Socket;



  constructor(private http: HttpClient, private authService: AuthService) { }



  getNumOf() {
    this.http.get<[NumOf]>(BACKEND + '/numOf').subscribe(res => {
      this.numOf = res
      this.numOfSub.next([...this.numOf])
    })
  }

  getNumOfListener() {
    return this.numOfSub.asObservable()
  }




  getAnalytics() {
    this.http.get<[Analytics]>(BACKEND).subscribe(res => {
      this.analytics = res
      this.analyticsSub.next([...this.analytics])
    })
  }

  getAnalyticsListener() {
    return this.analyticsSub.asObservable()
  }


  attachAnalyticsListener() {
    this.socket = io(environment.url + 'analytics', { query: { token: this.authService.getToken() } });
    this.socket.on('analyticsChange', (data) => {
      this.analytics = data
      this.analyticsSub.next([...this.analytics])
    })
  }


  attachNumOfListener() {
    this.numOfSocket = io(environment.url + 'numOf', { query: { token: this.authService.getToken() } });
    this.numOfSocket.on('numOfChange', (data) => {
      this.numOf = data
      this.numOfSub.next([...this.numOf])
    })
  }

  ngOnDestroy(): void {
    this.socket?.close()
    this.numOfSocket?.close()
  }
}
