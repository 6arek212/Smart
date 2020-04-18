import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from '../../services/client-auth.service';
import { RequestsService } from 'src/app/globalServices/requests.service';
import { Request } from 'src/app/models/Request';
import { ClientInfoService } from '../../services/client-info.service';
import { Subscription } from 'rxjs';
import { NumOf } from 'src/app/models/NumOf';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import { statusHandler } from 'src/app/utils-components/statusHandler';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css'],
  providers: [RequestsService]
})
export class ClientDashboardComponent implements OnInit {
  private requestsSub: Subscription
  requests: Request[]

  private staticInfoSub: Subscription
  staticInfo: NumOf[]

  private numOfRequestsSub: Subscription

  isLoading = []
  numOfRequests = 0
  currentPage = 1
  requestsPerPage = 10

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';


  constructor(private requestsService: RequestsService,
    private clientInfoService: ClientInfoService, private dialog: MatDialog) {
      moment.locale('he')

    }

  ngOnInit(): void {
    this.isLoading['requests'] = true
    this.isLoading['info'] = true


    this.requestsService.getRequestsByCustomerId(this.currentPage, this.requestsPerPage)
    this.requestsSub = this.requestsService.getRequestsListener().subscribe(res => {
      this.requests = res
      this.isLoading['requests'] = false
    })


    this.clientInfoService.getClientRequestsStatics()
    this.staticInfoSub = this.clientInfoService.getClientRequestsStaticsListener().subscribe(res => {
      this.staticInfo = res
      this.isLoading['info'] = false
    })

    this.numOfRequestsSub = this.clientInfoService.getPaginationStaticsListener().subscribe(res => {
      this.numOfRequests = res
    })
  }


  onChangedPage(pageData: PageEvent) {
    this.isLoading['requests'] = true
    this.currentPage = pageData.pageIndex + 1
    this.requestsPerPage = pageData.pageSize
    this.requestsService.getRequestsByCustomerId(this.currentPage, this.requestsPerPage)
  }

  statusHandler(status) {
    return statusHandler(status)
  }

  dateFormat(date: string) {
    return moment(date).fromNow()
  }

  fullDateFormat(date: string) {
    let timezoneDate=momentTimezone(date)
    return timezoneDate.tz('Asia/hebron').format('LLLL')
  }


  onCancelRequest(request: Request) {
    const confirm = () => {
      const updateOps = [
        { name: 'status', value: 'CANCEL' }
      ]

      this.requestsService.updateReuqest(request._id, updateOps).subscribe(res => {
        request.status = 'CANCEL'
        this.dialog.closeAll()
      })
    }

    this.dialog.open(DialogMessageComponent, {
      data:
      {
        buttons: true, title: 'الغاء طلب',
        message: 'هل انت متأكد لالغاء الطلب ؟', confirm
      }
    })

  }



  ngOnDestroy(): void {
    this.staticInfoSub?.unsubscribe()
    this.requestsSub?.unsubscribe()
    this.numOfRequestsSub?.unsubscribe()
  }
}
