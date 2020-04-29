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


  constructor(private requestService: RequestsService, private dialog: MatDialog, private staticsService: StaticsService) {
    moment.locale('he')
  }

  ngOnInit(): void {
    this.requestService.requestsSocketListener()

    this.form = new FormGroup({
      'filter': new FormControl('all'),
      'search': new FormControl()
    })

    this.isLoading = true
    this.requestService.getRequests(this.currentPage, this.pageSize)
    this.requestsSub = this.requestService.getRequestsListener().subscribe(req => {
      this.requests = req.requests
      this.totalRequests = req.max
      this.isLoading = false
    })
  }


  onChangeFilter(e: MatSelectChange) {
    var filter = e.value

    if (filter === 'all')
      filter = null

    this.form.updateValueAndValidity()
    this.requestService.getRequests(this.currentPage, this.pageSize, filter)
  }



  onSearch() {
    console.log(this.form);

    var filter = this.form.value.filter
    if (filter === 'all')
      filter = null

    this.requestService.getRequests(this.currentPage, this.pageSize, filter, this.form.value.search)
  }




  dateFormat(date: string) {
    return moment(date).fromNow()
  }

  fullDateFormat(date: string) {
    let timezoneDate = momentTimezone(date)
    return timezoneDate.tz('Asia/hebron').format('LLLL')
  }


  onPageChange(pageData: PageEvent) {
    this.isLoading = true
    this.currentPage = pageData.pageIndex + 1
    this.staticsService.getNumOf()
    this.requestService.getRequests(this.currentPage, this.pageSize)
  }



  onDeletingRequest(request) {
    const confirm = () => {
      this.requestService.deleteRequest(request, () => {
        this.staticsService.getNumOf()
      })
      this.dialog.closeAll()
    }
    this.dialog.open(DialogMessageComponent, { data: { buttons: true, title: 'حذف طلب', message: 'هل أنت متأكد من حذف الطلب ؟', confirm } })
  }



  onUpdatingStatus(request) {
    const updateOps = [
      { name: 'status', value: 'DONE' }
    ]


    const confirm = () => {
      this.requestService.updateReuqest(request._id, updateOps).subscribe(res => {
        request.status = 'DONE'
      })
      this.dialog.closeAll()
    }

    this.dialog.open(DialogMessageComponent, {
      data: {
        buttons: true, title: 'اتمام طلب',
        message: 'هل أنت متأكد من اتمام الطلب ؟', confirm
      }
    })
  }


  statusHandler(status) {
    return statusHandler(status)
  }



  ngOnDestroy(): void {
    this.numOfSub?.unsubscribe()
    this.requestsSub?.unsubscribe()
  }
}
