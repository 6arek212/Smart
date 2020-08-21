import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const BACKEND_URL = environment.apiUrl + 'forgotPassword/'

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  code: string
  forgotPasswordId: string
  phone: string

  private isDone = new Subject<boolean>()


  constructor(private http: HttpClient) { }


  getIsDone() {
    return this.isDone.asObservable()
  }

  sendMessageAgain() {
    this.http.post<{ message }>(BACKEND_URL + 'again', { forgotPasswordId: this.forgotPasswordId }).subscribe(res => {
    })
  }


  addForgotPasswordRequest(phone: string) {
    this.phone = phone
    this.http.post<{ code: string, forgotPasswordId: string }>(BACKEND_URL, { phone }).subscribe(res => {
      this.code = res.code
      this.forgotPasswordId = res.forgotPasswordId
      this.isDone.next(true)
    }, () => {
      this.isDone.next(null)
      console.log('error from service');
    })
  }



  verifyRequest(code: string) {
    this.http.post<{ message: string }>(BACKEND_URL + 'verify', { code, forgotPasswordId: this.forgotPasswordId }).subscribe(res => {
      this.isDone.next(true)
    }, () => this.isDone.next(null))
  }



  changePassword(password: string) {
    return this.http.patch<{ message: string }>(BACKEND_URL, { password, phone: this.phone, forgotPasswordId: this.forgotPasswordId })
  }

}
