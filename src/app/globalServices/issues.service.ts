import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const BACKEND_URL = environment.apiUrl + 'issues/'

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: { _id: string, name: string }[]
  private issuesListener = new Subject<{ _id: string, name: string }[]>()

  constructor(private http: HttpClient) { }


  getIssuesListener() {
    return this.issuesListener.asObservable()
  }

  getIssues() {
    this.http.get<{ message: string, issues: { _id: string, name: string }[] }>(BACKEND_URL).subscribe(res => {
      this.issues = res.issues
      this.issuesListener.next([...this.issues])
    })
  }


  addIssue(name: string) {
    return this.http.post<{ message: string }>(BACKEND_URL, {name})
  }
}
