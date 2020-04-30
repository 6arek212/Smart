import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as io from 'socket.io-client';
import { ClientAuthService } from '../client/services/client-auth.service';


const BACKEND_URL = environment.apiUrl + 'notifications/'


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifications: { text: string }[]
  private notificationsListener = new Subject<{ text: string }[]>()
  private socket: SocketIOClient.Socket;


  constructor(private http: HttpClient, private clientAudthService: ClientAuthService) { }



  notificationSocket() {
    this.socket = io(environment.url + 'notifications', { query: { token: this.clientAudthService.getToken() } });
    this.socket.on('notificationChange', (data) => {
      const type = data.operationType
      const doc = data.fullDocument

      switch (type) {
        case 'insert':
          this.notifications.unshift(doc)
          this.notificationsListener.next([...this.notifications])
          break

        case 'update':

          break
      }
    })
  }


  ngOnDestroy(): void {
    this.socket?.close()
  }

  getNotificationsListner() {
    return this.notificationsListener.asObservable()
  }


  getNotifications() {
    this.http.get<{ message: string, notifications: { text: string }[] }>(BACKEND_URL)
      .subscribe(res => {
        this.notifications = res.notifications
        this.notificationsListener.next([...this.notifications])
      })
  }

  sendNotification(msg: string) {
    return this.http.post<{ message: string }>(BACKEND_URL, { message: msg })
  }


  deleteNotification(id: string) {
    this.http.delete<{
      message: string
    }>(BACKEND_URL + id).subscribe(res => {
      console.log(res);
    })
  }
}
