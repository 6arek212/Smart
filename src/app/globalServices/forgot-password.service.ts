import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = environment.apiUrl + 'forgotPassword/'

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  code: string
  forgotPasswordId: string
  phone: string


  constructor(private http: HttpClient) { }



  sendMessageAgain() {
    this.http.post<{ message }>(BACKEND_URL + 'again', { forgotPasswordId:this.forgotPasswordId }).subscribe(res=>{
    })
  }


  addForgotPasswordRequest(phone: string, callback: Function) {
    this.phone = phone
    this.http.post<{ code: string, forgotPasswordId: string }>(BACKEND_URL, { phone }).subscribe(res => {
      this.code = res.code
      this.forgotPasswordId = res.forgotPasswordId
      callback()
    })
  }



  verifyRequest(code: string,callback:Function) {
    this.http.post<{ message: string }>(BACKEND_URL + 'verify', { code, forgotPasswordId: this.forgotPasswordId }).subscribe(res => {
      callback()
    })
  }



  changePassword(password: string,callback:Function) {
    this.http.patch<{ message: string }>(BACKEND_URL, { password, phone: this.phone, forgotPasswordId: this.forgotPasswordId }).subscribe(res => {
      callback()
    })
  }

}
