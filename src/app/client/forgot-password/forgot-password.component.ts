import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/globalServices/forgot-password.service';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [ForgotPasswordService]
})
export class ForgotPasswordComponent implements OnInit {

  isLoading = false
  step = 1

  constructor(private forgotPasswordService: ForgotPasswordService, private router: Router) { }

  ngOnInit(): void {
  }


  sendForgotPasswordRequest(form: NgForm) {
    if (form.invalid)
      return

    this.isLoading = true
    this.forgotPasswordService.addForgotPasswordRequest(form.value.phone, () => {
      this.step++
      this.isLoading = false
    })
  }


  sendCodeAgain() {
    this.forgotPasswordService.sendMessageAgain()
  }


  onVerify(form: NgForm) {
    if (form.invalid)
      return

    this.isLoading = true
    this.forgotPasswordService.verifyRequest(form.value.code, () => {
      this.step++
      this.isLoading = false
    })
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
    this.forgotPasswordService.changePassword(form.value.password, () => {
      this.isLoading = false
      this.router.navigate(['/client/login'])
    })
  }
}
