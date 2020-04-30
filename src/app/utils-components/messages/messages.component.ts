import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/globalServices/notifications.service';
import { dateFormat } from '../utils'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [NotificationsService]
})
export class MessagesComponent implements OnInit {
  messages: { text: string }[]
  dateFormat: any = dateFormat;

  constructor(private messagesService: NotificationsService) { }

  ngOnInit(): void {
    this.messagesService.notificationSocket()
    this.messagesService.getNotifications()
    this.messagesService.getNotificationsListner().subscribe(res => {
      this.messages = res
    })
  }

}
