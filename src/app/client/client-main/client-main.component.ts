import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from '../services/client-auth.service';
import { ClientInfoService } from '../services/client-info.service';

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css'],
  providers: [ClientInfoService]
})
export class ClientMainComponent implements OnInit {

  constructor(private clientAuthService: ClientAuthService) { }

  ngOnInit(): void {
  }

}
