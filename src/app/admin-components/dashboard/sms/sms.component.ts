import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { NgForm } from '@angular/forms';
import { SMSService } from 'src/app/globalServices/sms.service';
import { MessagesService } from 'src/app/globalServices/messages.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  isLoading = []

  constructor(private smsService: SMSService, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.isLoading['sms'] = false
    this.isLoading['message'] = false
  }



  onSendingMessage(form: NgForm) {
    if (form.invalid)
      return
    this.isLoading['sms'] = true
    this.smsService.sendMessage(form.value.to, form.value.toAll, form.value.message).subscribe(res => {
      this.isLoading['sms'] = false
    })

    form.reset()
  }



  onSendingNotification(form: NgForm) {
    if (form.invalid)
      return

    this.isLoading['message'] = true

    this.messagesService.sendMessage(form.value.message).subscribe(res => {
      this.isLoading['message'] = false
    })
    form.reset()
  }


}
