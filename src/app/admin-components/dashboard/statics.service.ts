import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { NumOf } from 'src/app/models/NumOf';
import { Analytics } from 'src/app/models/Analytics';

const BACKEND = environment.apiUrl + "analytics"

@Injectable({
  providedIn: 'root'
})
export class StaticsService {
  private numOf: NumOf[] = []
  private numOfSub = new Subject<NumOf[]>()

  private analytics: Analytics[] = []
  private analyticsSub = new Subject<Analytics[]>()





  constructor(private http: HttpClient) { }



  getNumOf() {
    this.http.get<[NumOf]>(BACKEND + '/numOf').subscribe(res => {
      this.numOf = res
      this.numOfSub.next([...this.numOf])
    })
  }

  getNumOfListener() {
    return this.numOfSub.asObservable()
  }




  getAnalytics() {
    this.http.get<[Analytics]>(BACKEND).subscribe(res => {
      this.analytics = res
      this.analyticsSub.next([...this.analytics])
    })
  }

  getAnalyticsListener() {
    return this.analyticsSub.asObservable()
  }





}
