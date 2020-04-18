import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { NumOf } from 'src/app/models/NumOf';
import { StaticsMulti } from 'src/app/models/StaticsMulti';

const BACKEND = environment.apiUrl + "statistic"

@Injectable({
  providedIn: 'root'
})
export class StaticsService {
  private numOf: NumOf[] = []
  private numOfSub = new Subject<NumOf[]>()

  private statistics: StaticsMulti[] = []
  private statisticsSub = new Subject<StaticsMulti[]>()





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




  getStaticsRecord() {
    this.http.get<[StaticsMulti]>(BACKEND).subscribe(res => {
      this.statistics = res
      this.statisticsSub.next([...this.statistics])
    })
  }

  getStaticsRecordListener() {
    return this.statisticsSub.asObservable()
  }



  siteVisit() {
    this.http.post(BACKEND + '/siteVisit', null).subscribe(res => {

    })
  }

}
