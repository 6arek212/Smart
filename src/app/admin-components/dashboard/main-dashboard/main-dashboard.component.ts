import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'src/app/utils-components/dialog-message/dialog-message.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  user
  isCollapsed = false;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }

  onLogOut() {
    const ref = this.dialog.open(DialogMessageComponent, { data: { buttons: true ,title:'יצאה מהמערכת',message:'אתה בטוח לצאת מהמערכת ?'} })

    ref.afterClosed().subscribe(res => {
      if (res)
        this.authService.logout()
    })
  }

}
