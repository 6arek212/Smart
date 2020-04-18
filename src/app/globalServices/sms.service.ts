import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const BACKEND_URL = environment.apiUrl + 'sms/'

@Injectable({
  providedIn: 'root'
})
export class SMSService {

  constructor(private http: HttpClient) { }



  sendMessage(to: string, toAll: boolean, message: string) {
    this.http.post<{ message: string }>(BACKEND_URL,{to,toAll,message}).subscribe(res=>{
      console.log(res);
    })
  }



}
