import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   isAuthenticated=false
  private authStatusAuthSub: Subscription

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated=this.authService.getIsAuthenticated()
    this.authService.getIsAuthenticatedListener().subscribe(status=>{
      this.isAuthenticated=status
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.authStatusAuthSub?.unsubscribe()
  }

  onLogOut(){
    this.authService.logout()
  }

}
