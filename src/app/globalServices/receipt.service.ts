import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receipt } from '../models/Receipt';


const BACKEND_URL = environment.apiUrl + 'pdf/'


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }


  getReceipt(data: Receipt) {
    return this.http.post(BACKEND_URL, data, {
      headers:new HttpHeaders().append('Content-Type','application/json'),
      responseType: 'blob'
    })
  }


}
