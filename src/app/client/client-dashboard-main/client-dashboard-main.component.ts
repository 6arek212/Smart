import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from '../services/client-auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-dashboard-main',
  templateUrl: './client-dashboard-main.component.html',
  styleUrls: ['./client-dashboard-main.component.css']
})
export class ClientDashboardMainComponent implements OnInit {
  user
  userListener: Subscription

  constructor(private clietAuthService: ClientAuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.clietAuthService.getUser()
    this.userListener = this.clietAuthService.getUserListener().subscribe(res => {
      this.user = res
    })
  }

  onLogOut() {
    const confirm = () => {
      this.clietAuthService.logout()
      this.dialog.closeAll()
    }
    this.dialog.open(DialogMessageComponent, { data: { buttons: true, confirm, message: 'هل أنت متاكد لتسجيل الخروج ؟', title: 'تسجيل الخروج' } })
  }

  ngOnDestroy(): void {
    this.userListener.unsubscribe()
  }
}
