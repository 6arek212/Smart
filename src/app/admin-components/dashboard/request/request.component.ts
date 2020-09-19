import { Component, OnInit, Input } from '@angular/core';
import { Request } from 'src/app/models/Request';
import { statusHandler, statusTextColorHandler } from '../../../utils-components/statusHandler'
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import { RequestsService } from 'src/app/globalServices/requests.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
import { StaticsService } from '../statics.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() request
  url = environment.url+'devices/'


  constructor(private requestService: RequestsService, private dialog: MatDialog, private staticsService: StaticsService) {
    moment.locale('he')
  }

  ngOnInit(): void {
    console.log(this.request);
  }

  showMore(id) {
    console.log(id);

    $(".request-content#" + id)
      .fadeToggle(500)
      .css("display", "flex")


    $("#arrow." + id)
      .toggleClass('rotate-90')
  }

  statusHandler(status) {
    return statusHandler(status)
  }
  statusTextColorHandler(status) {
    return statusTextColorHandler(status)
  }

  dateFormat(date: string) {
    return moment(date).fromNow()
  }

  fullDateFormat(date: string) {
    let timezoneDate = momentTimezone(date)
    return timezoneDate.tz('Asia/hebron').format('LLLL')
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



  onDeletingRequest(request) {
    const confirm = () => {
      this.requestService.deleteRequest(request, () => {
        this.staticsService.getNumOf()
      })
      this.dialog.closeAll()
    }
    this.dialog.open(DialogMessageComponent, { data: { buttons: true, title: 'حذف طلب', message: 'هل أنت متأكد من حذف الطلب ؟', confirm } })
  }
}
