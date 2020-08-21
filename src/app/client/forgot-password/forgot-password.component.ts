import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/globalServices/forgot-password.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [ForgotPasswordService],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ForgotPasswordComponent implements OnInit {

  isLoading = false
  step = 1
  status: Subscription

  constructor(private forgotPasswordService: ForgotPasswordService, private router: Router) { }

  ngOnInit(): void {
    this.status = this.forgotPasswordService.getIsDone().subscribe(res => {
      if (res) {
        this.step++
        this.isLoading = false
      }

      if (res == null) {
        this.isLoading = false
      }
    })
  }

  ngOnDestroy(): void {
    this.status.unsubscribe()
  }




  sendForgotPasswordRequest(form: NgForm) {
    if (form.invalid)
      return
    this.isLoading = true
    this.forgotPasswordService.addForgotPasswordRequest(form.value.phone)
  }


  sendCodeAgain() {
    this.forgotPasswordService.sendMessageAgain()
  }


  onVerify(form: NgForm) {
    if (form.invalid)
      return
    this.isLoading = true
    this.forgotPasswordService.verifyRequest(form.value.code)
  }


  onChangePassword(form: NgForm) {

    if (form.value.password !== form.value.confirmPassword) {
      form.controls.confirmPassword.setErrors({
        passwordNotMatch: true
      })
    }

    if (form.invalid)
      return


    this.isLoading = true
    if (form.invalid)
      return
    this.forgotPasswordService.changePassword(form.value.password).subscribe(res => {
      this.isLoading = false
      this.router.navigate(['/client/login'])
    }, () => this.isLoading = false)
  }
}
