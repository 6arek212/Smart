import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as io from 'socket.io-client';
import { ClientAuthService } from '../client/services/client-auth.service';


const BACKEND_URL = environment.apiUrl + 'messages/'


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: { text: string }[]
  private messagesListener = new Subject<{ text: string }[]>()
  private socket: SocketIOClient.Socket;


  constructor(private http: HttpClient, private clientAudthService: ClientAuthService) { }



  messagesSocket() {
    this.socket = io(environment.url + 'messages', { query: { token: this.clientAudthService.getToken() } });
    this.socket.on('messageChange', (data) => {
      const type = data.operationType
      const doc = data.fullDocument

      switch (type) {
        case 'insert':
          this.messages.unshift(doc)
          this.messagesListener.next([...this.messages])
          break

        case 'update':

          break
      }
    })
  }


  ngOnDestroy(): void {
    this.socket?.close()
  }

  getMessagesListner() {
    return this.messagesListener.asObservable()
  }


  getMessages() {
    this.http.get<{ message: string, messages: { text: string }[] }>(BACKEND_URL)
      .subscribe(res => {
        this.messages = res.messages
        this.messagesListener.next([...this.messages])
      })
  }

  sendMessage(msg: string) {
    return this.http.post<{ message: string }>(BACKEND_URL, { message: msg })
  }


  deleteMessage(id: string) {
    this.http.delete<{
      message: string
    }>(BACKEND_URL + id).subscribe(res => {
      console.log(res);
    })
  }
}
