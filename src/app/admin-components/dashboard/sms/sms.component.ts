import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { NgForm } from '@angular/forms';
import { SMSService } from 'src/app/globalServices/sms.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  isLoading = false

  constructor(private smsService: SMSService) { }

  ngOnInit(): void {
  }



  onSendingMessage(form: NgForm) {
    this.smsService.sendMessage(form.value.to, form.value.toAll, form.value.message)
  }


}
