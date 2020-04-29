import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/globalServices/messages.service';
import { dateFormat } from '../utils'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  messages: { text: string }[]
  dateFormat: any = dateFormat;

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.messagesSocket()
    this.messagesService.getMessages()
    this.messagesService.getMessagesListner().subscribe(res => {
      this.messages = res
    })
  }

}
