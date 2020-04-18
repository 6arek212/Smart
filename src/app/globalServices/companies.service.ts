import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const BACKEND_URL = environment.apiUrl + 'companies/'

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private companies: { _id: string, name: string }[]
  private companiesListener = new Subject<{ _id: string, name: string }[]>()

  constructor(private http: HttpClient) { }


  getCompaniesListener() {
    return this.companiesListener.asObservable()
  }

  getCompanies() {
    this.http.get<{ message: string, companies: { _id: string, name: string }[] }>(BACKEND_URL).subscribe(res => {
      this.companies = res.companies
      this.companiesListener.next([...this.companies])
    })
  }


  addCompany(name: string) {
    return this.http.post<{ message: string }>(BACKEND_URL, {name})
  }


}
