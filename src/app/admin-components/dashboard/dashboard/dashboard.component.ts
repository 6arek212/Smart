import { Component, OnInit } from '@angular/core';
import { StaticsService } from '../statics.service';
import { Subscription } from 'rxjs';
import { Analytics } from 'src/app/models/Analytics';
import { animations } from '../../../animations'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  multi: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'יום';
  yAxisLabel: string = 'כמות';
  timeline: boolean = true;


  single: any[];
  numOfSub: Subscription

  staticsRecord: Analytics[] = []
  staticsRecordSub: Subscription


  showLegened = true

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor(private staticsService: StaticsService) {
  }

  ngOnInit(): void {
    this.staticsService.getAnalytics()
    this.staticsService.getNumOf()

    this.staticsRecordSub = this.staticsService.getAnalyticsListener().subscribe(res => {
      this.staticsRecord = res
    })

    this.numOfSub = this.staticsService.getNumOfListener().subscribe(res => {
      this.single = res
    })
  }

  ngOnDestroy(): void {
    this.numOfSub.unsubscribe()
    this.staticsRecordSub.unsubscribe()
  }

}
