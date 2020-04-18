import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/admin-components/services/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false
  private authStatusAuth: Subscription
  selectedItem = 'male'

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authStatusAuth = this.authService.getAuthStatusListener().subscribe(
    //   authStatus => {
    //     this.isLoading = false
    //   }
    // )
  }




  onValidatePassword(form: NgForm) {
    console.log(form.controls);

    const validatePassword = form.controls.validate_password
    const password = form.controls.password

    if (validatePassword.value !== password.value) {
      validatePassword.setErrors({
        ...validatePassword.errors,
        passwordNotMatch: true
      })
    }

  }

  onSingUp(form: NgForm) {
    this.onValidatePassword(form)

    if (form.invalid) {
      return
    }


    this.isLoading = true
    const user: User = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
      gender: form.value.gender
    }

    this.authService.onSignUp(user)



    form.reset()
  }


  ngOnDestroy() {
    this.authStatusAuth?.unsubscribe()
  }
}
