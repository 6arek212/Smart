import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/globalServices/requests.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import { StaticsService } from '../statics.service';
import { PageEvent } from '@angular/material/paginator';
import { statusHandler } from '../../../utils-components/statusHandler'
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css'],
  providers: [RequestsService]
})
export class RequestsListComponent implements OnInit {
  requests
  private requestsSub: Subscription

  private numOfSub: Subscription
  totalRequests
  pageSize = 10
  currentPage = 1

  isLoading = false
  form: FormGroup

  maxDate: Date
  minDate: Date

  constructor(private requestService: RequestsService, private dialog: MatDialog, private staticsService: StaticsService) {
    moment.locale('he')
  }

  ngOnInit(): void {
    this.requestService.requestsSocketListener()


    const fullYear = new Date().getFullYear()
    this.maxDate = new Date()
    this.minDate = new Date(fullYear - 10, 0, 1)


    this.form = new FormGroup({
      'filter': new FormControl('all'),
      'search': new FormControl(),
      'date': new FormControl(new Date())
    })

    this.isLoading = true
    this.requestService.getRequests(this.currentPage, this.pageSize, null, this.form.value.search, this.form.value.date)
    this.requestsSub = this.requestService.getRequestsListener().subscribe(req => {
      this.requests = req.requests
      this.totalRequests = req.max
      this.isLoading = false
    })
  }

  clearInputs() {
    this.form.reset()
    this.form.controls.filter.setValue('all')
    this.requestService.getRequests(this.currentPage, this.pageSize, null, this.form.value.search, this.form.value.date)
  }


  showAll() {
    $(".request-content")
      .fadeToggle(500)
      .css("display", "flex")
  }

  onChangeFilter(e: MatSelectChange) {
    var filter = e.value

    if (filter === 'all')
      filter = null

    this.form.updateValueAndValidity()
    this.requestService.getRequests(this.currentPage, this.pageSize, filter, this.form.value.search, this.form.value.date)
  }



  onSearch() {
    var filter = this.form.value.filter
    if (filter === 'all')
      filter = null


    const mDate = (this.form.value.date as Date).toUTCString()

    console.log(this.form.value.date);


    this.requestService.getRequests(this.currentPage, this.pageSize, filter, this.form.value.search,mDate)
  }


  onPageChange(pageData: PageEvent) {
    this.isLoading = true
    this.currentPage = pageData.pageIndex + 1
    this.staticsService.getNumOf()
    this.requestService.getRequests(this.currentPage, this.pageSize)
  }


  statusHandler(status) {
    return statusHandler(status)
  }



  ngOnDestroy(): void {
    this.numOfSub?.unsubscribe()
    this.requestsSub?.unsubscribe()
  }
}
