import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { PhoneAuthService } from './phone-auth.service';
import { Router } from '@angular/router';
import { selectInput, phoneNumber } from '../validators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.css']
})
export class PhoneAuthComponent implements OnInit {
  @Output() isDone = new EventEmitter<boolean>()
  @Output() phoneNumber = new EventEmitter<string>()
  @Input() nav: string;

  formNumberValidate: FormGroup
  formNumberVerify: FormGroup
  isLoading = false
  authError = false
  authSuccess = false
  step = 1
  numberOfDigits = 5
  numberArr = []
  isVerifiedSub: Subscription

  constructor(private phoneService: PhoneAuthService, private router: Router) {
    for (let i = 0; i < this.numberOfDigits; i++) {
      this.numberArr[i] = i + 1
    }
  }



  ngOnInit(): void {
    this.setUpForms()
    this.isVerifiedSub = this.phoneService.getIsVierifiedListener().subscribe(isVerified => {
      this.isLoading = false
      this.authSuccess = isVerified

      if (!isVerified) {
        this.formNumberVerify.reset()
        document.getElementById('input1').focus()
        this.isLoading = false
        this.authError = true
      }

      if (isVerified) {
        if (this.nav)
          this.router.navigate([this.nav])
        else {
          this.isDone.emit(true)
          this.phoneNumber.emit(this.phoneService.getPhoneNumberAndCountryCode().phoneNumber)
        }
      }
    })
  }


  ngOnDestroy(): void {
    this.isVerifiedSub.unsubscribe()
  }


  setUpForms() {
    this.formNumberValidate = new FormGroup({
      // 'countryCode': new FormControl('-1', {
      //   asyncValidators: [selectInput]
      // }),
      'phoneNumber': new FormControl(null, { asyncValidators: [phoneNumber] }),
    })


    this.formNumberVerify = new FormGroup({
      'input1': new FormControl(null),
      'input2': new FormControl(null),
      'input3': new FormControl(null),
      'input4': new FormControl(null),
      'input5': new FormControl(null)
    })

  }

  onSelect(controler: AbstractControl) {
    controler.markAsTouched()
  }








  nextFocus(num, event: KeyboardEvent) {
    if (num <= this.numberOfDigits) {
      this.authError = false

      if (num > 2 && event.code === 'Backspace') {
        const element = document.getElementById('input' + (num - 2)) as HTMLInputElement
        element.focus()
        element.setSelectionRange(0, element.value.length)
        return
      }
      else if (event.code !== 'Backspace') {
        const parent = document.getElementById('input' + (num - 1)) as HTMLInputElement
        if (parent.value !== '') {
          const element = document.getElementById('input' + num) as HTMLInputElement
          element.focus()
        }
      }


    }
    else {
      if (!this.phoneService.getPhoneAuthId()) {
        if (event.code === 'Backspace') {
          const element = document.getElementById('input' + (num - 2)) as HTMLInputElement
          element.setSelectionRange(0, element.value.length)
          element.focus()
        }
        return
      }
      this.isLoading = true

      let code = ''

      for (let i = 1; i <= 5; i++) {
        code += this.formNumberVerify.value['input' + i]
      }
      this.phoneService.verifyPhone(code, this.phoneService.getPhoneAuthId())
    }
  }







  onSendingSMS(isResend: boolean = false) {
    console.log(this.formNumberValidate.controls);

    if (this.formNumberValidate.invalid) {
      this.formNumberValidate.markAllAsTouched()
      return
    }

    const { phoneNumber, countryCode } = this.formNumberValidate.value

    this.isLoading = true

    const error = () => {
      this.authError = false
      this.authSuccess = false
      this.isLoading = false
    }

    this.phoneService.sendSMS(countryCode, phoneNumber, () => {
      if (!isResend)
        this.step++
      this.isLoading = false
    }, error)
  }


  resetForm() {
    this.formNumberValidate.reset()
    this.formNumberVerify.reset()
    this.step = 1
    this.authSuccess = false
    this.isLoading = false
    this.phoneService.reset()
  }
}
