import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receipt } from '../models/Receipt';
import { Subject } from 'rxjs';
import { DataState, Loading, mError, Success } from '../DataState';


const BACKEND_URL = environment.apiUrl + 'pdf/'

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  receipts: { id: number, fullName: string, fileName: string }[]
  receiptsListener = new Subject<DataState>()


  constructor(private http: HttpClient) { }

  getReceipt(fileName: string) {
    console.log(BACKEND_URL + fileName);

    return this.http.get(BACKEND_URL + fileName, {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      responseType: 'blob'
    })
  }


  createReceipt(data: Receipt) {
    return this.http.post(BACKEND_URL, data, {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      responseType: 'blob'
    })
  }


  getAllReceipts(id: string = null) {
    let q: string
    if (id)
      q = '?id=' + id

    this.receiptsListener.next(new Loading())
    this.http.post<{ message: string, receipts: { id: number, fullName: string, fileName: string }[] }>
      (BACKEND_URL+'getAll', { id: id }).subscribe(res => {
        this.receipts = res.receipts
        this.receiptsListener.next(new Success([...this.receipts]))
      }, error => {
        this.receiptsListener.next(new mError(error))
      })
  }


  getReceiptListener() {
    return this.receiptsListener.asObservable()
  }
}
