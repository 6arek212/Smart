import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const BASE_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class PhoneAuthService {
  private authPhoneNumber: string
  private authCountryCode: string

  private isVerified: boolean = false
  private isVerifiedListener = new Subject<boolean>()

  private isLoading = new Subject<boolean>()
  private phoneAuthId: string

  constructor(private http: HttpClient) { }
  ngOnDestroy(): void {
  }

  getPhoneAuthId() {
    return this.phoneAuthId
  }

  getPhoneNumberAndCountryCode() {
    return { phoneNumber: this.authPhoneNumber, countryCode: this.authCountryCode }
  }


  getIsVerified() {
    return this.isVerified
  }

  getIsVierifiedListener() {
    return this.isVerifiedListener.asObservable()
  }

  reset(){
    this.phoneAuthId=null
    this.isVerified=false
    this.isVerifiedListener.next(false)
  }

  sendSMS(countryCode: string, phoneNumber: string, success: Function = null, error: Function = null) {
    this.isLoading.next(true)
    this.authPhoneNumber = phoneNumber
    this.authCountryCode = countryCode
    this.http.post<{ message: string, _id: string }>(BASE_URL + 'phoneAuth', { countryCode, phoneNumber }).subscribe(res => {
      this.phoneAuthId = res._id
      success()
    }, err => {
      error(err)
    })
  }


  verifyPhone(code: string, _id: string) {
    this.http.post(BASE_URL + 'phoneAuth/verifyNumber', { code, _id }).subscribe(res => {
      this.isVerified = true
      this.isVerifiedListener.next(true)
      console.log(res);

    }, err => {
      console.log(err);
      this.isVerified = false
      this.isVerifiedListener.next(this.isVerified)
    })
  }

}
