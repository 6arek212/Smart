import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/admin-components/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false
  isAuthenticated = false
  private authListenerSubs: Subscription

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.autoAuthUser(true)

    this.form = new FormGroup({
      'phone': new FormControl(null, { validators: [Validators.required] }),
      'password': new FormControl(null, { validators: [Validators.required] }),
      'keepMeLogedIn': new FormControl(true)
    })

    this.authListenerSubs = this.authService.getIsAuthenticatedListener().subscribe(isAuthintecated => {
      this.isAuthenticated = isAuthintecated
      this.isLoading = false
    })


  }

  ngOnDestroy(): void {
    this.authListenerSubs?.unsubscribe()
  }

  onLogin() {
    if (this.form.invalid) {
      return
    }

    this.isLoading = true
    this.authService.login(this.form.value.phone, this.form.value.password,this.form.value.keepMeLogedIn)

    this.form.reset()
  }
}
