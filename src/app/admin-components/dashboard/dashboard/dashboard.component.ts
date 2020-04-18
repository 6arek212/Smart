import { Component, OnInit } from '@angular/core';
import { StaticsService } from '../statics.service';
import { Subscription } from 'rxjs';
import { StaticsMulti } from 'src/app/models/StaticsMulti';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;


  single: any[];
  numOfSub: Subscription

  staticsRecord: StaticsMulti[] = []
  staticsRecordSub: Subscription


  showLegened = true

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor(private staticsService: StaticsService) {
  }

  ngOnInit(): void {
    this.staticsService.getStaticsRecord()
    this.staticsService.getNumOf()

    this.staticsRecordSub = this.staticsService.getStaticsRecordListener().subscribe(res => {
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
