import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumber } from '../../utils-components/validators'
import { ClientAuthService } from '../services/client-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  form: FormGroup
  isLoading = false

  constructor(private clientAuthService: ClientAuthService) {
    this.clientAuthService.autoAuthUser(true)
  }



  ngOnInit(): void {


    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6), Validators.maxLength(24)],
        asyncValidators: [phoneNumber]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
      }),
      keepMeLogedIn: new FormControl(false),
    })

    this.clientAuthService.getIsAuthenticatedListener().subscribe(isAuth => {
      this.isLoading = isAuth
    })
  }



  onLogin() {
    if (this.form.invalid){
      this.form.markAsTouched()
      return
    }

    this.isLoading = true
    this.clientAuthService.login(this.form.get('phone').value, this.form.get('password').value,this.form.get('keepMeLogedIn').value)
  }

}
