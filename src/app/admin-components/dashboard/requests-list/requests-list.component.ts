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


  constructor(private requestService: RequestsService, private dialog: MatDialog, private staticsService: StaticsService) {
    moment.locale('he')
  }

  ngOnInit(): void {
    this.isLoading = true
    this.requestService.getRequests(this.currentPage, this.pageSize)
    this.requestsSub = this.requestService.getRequestsListener().subscribe(req => {
      this.requests = req
      this.isLoading = false
    })

    this.staticsService.getNumOf()
    this.numOfSub = this.staticsService.getNumOfListener().subscribe(res => {
      this.getRequestsData(res)
    })
  }





  async getRequestsData(data) {
    for (const d of data) {
      if (d.name == 'Requests') {
        this.totalRequests = d.value
      }
    }
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
      this.requestService.deleteRequest(request._id, () => {
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
    this.numOfSub.unsubscribe()
    this.requestsSub.unsubscribe()
  }
}
