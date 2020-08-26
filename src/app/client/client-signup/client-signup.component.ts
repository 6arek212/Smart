import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { Subscription } from 'rxjs';
import { selectInput, nameCheck, matchPassword } from '../../utils-components/validators'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ClientAuthService } from '../services/client-auth.service';
import { CustomerDbModel } from '../../models/CustomerDbModel'
import { PhoneAuthService } from 'src/app/utils-components/phone-auth/phone-auth.service';


@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css'],
  providers: [CitiesService, PhoneAuthService, {
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class ClientSignupComponent implements OnInit {
  isLinear = true
  forms: FormGroup[] = []
  cities: { name: string, _id: string }[] = []
  citiesSub: Subscription

  constructor(private citiesService: CitiesService, private clientAuth: ClientAuthService, private phoneAuthService: PhoneAuthService) { }

  ngOnInit(): void {
    this.citiesService.getCites()
    this.citiesSub = this.citiesService.getCitiesListener().subscribe(cities => {
      this.cities = cities
    })


    this.forms['personalInfo'] = new FormGroup({
      firstName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)],
        asyncValidators: [nameCheck]
      }),
      lastName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      city: new FormControl('-1', {
        asyncValidators: [selectInput]
      }),
      gender: new FormControl('male', {
        validators: [Validators.required]
      })
    })

    this.forms['phoneAuth'] = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)]
      })
    })

    this.forms['password'] = new FormGroup({
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
      }),
      verifyPassword: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
      })
    })

    // this.forms[1] = new FormGroup({

    // })
  }


  ngOnDestroy(): void {
    this.citiesSub.unsubscribe()
  }

  isDone(e, steper: MatHorizontalStepper) {
    this.forms['phoneAuth'].controls.phoneIsValid.setValue(true)
    steper.next()
  }



  checkPasswordMatch() {
    matchPassword(this.forms['password'].controls.password, this.forms['password'].controls.verifyPassword);
    (this.forms['password'].controls.verifyPassword as FormControl).markAsTouched()
  }


  onSingUp() {
    for (const form of this.forms) {
      if (form.invalid)
        return
    }

    // const { phoneNumber, countryCode } = this.phoneAuthService.getPhoneNumberAndCountryCode()



    const customer: CustomerDbModel = {
      firstName: this.forms['personalInfo'].get('firstName').value,
      lastName: this.forms['personalInfo'].get('lastName').value,
      city: this.forms['personalInfo'].get('city').value,
      gender: this.forms['personalInfo'].get('gender').value,
      phone: this.forms['phoneAuth'].get('phone').value,
      countryCode: "+972",
      password: this.forms['password'].get('password').value
    }

    this.clientAuth.onSignUp(customer)
  }

}
