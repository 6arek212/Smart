import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthData } from '../interfaces/auth-data';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + 'admin/'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false
  private isAuthenticatedListener = new Subject<boolean>()
  private isLoading = false
  private token: string
  private tokenTimer: any
  private user: { firstName: string, lastName: string, _id: string }

  constructor(private http: HttpClient, private router: Router) {
  }

  getIsAuthenticated() {
    return this.isAuthenticated
  }

  getIsAuthenticatedListener() {
    return this.isAuthenticatedListener
  }

  getIsLoading() {
    return this.isLoading
  }

  getToken() {
    return this.token
  }

  getUser() {
    return this.user
  }

  onSignUp(user: User, keepMelogedIn: boolean = false) {
    this.isLoading = true
    this.http.post<{ message: string, token: string, expiresIn: number, user: { firstName: string, lastName: string, _id: string } }>(BACKEND_URL + 'signup', user).subscribe(res => {
      this.authMethod(res, keepMelogedIn)
    })
  }


  login(username: string, password: string, keepMelogedIn: boolean = false) {
    const authData: AuthData = { username, password }

    this.isLoading = true
    this.http.post<{ message: string, token: string, expiresIn: number, user: { firstName: string, lastName: string, _id: string } }>
      (BACKEND_URL + 'login', authData).subscribe(res => {
        this.authMethod(res, keepMelogedIn)
      }, err => {
        this.setAuthenticated(false)
      })
  }

  private setAuthenticated(state) {
    this.isAuthenticated = state
    this.isAuthenticatedListener.next(state)
    this.isLoading = false
  }


  private authMethod(res, keepMelogedIn: boolean = false) {
    const token = res.token
    this.token = token
    if (token) {
      this.token = token
      this.setAuthenticated(true)

      const user = res.user
      const expiresInDuration = res.expiresIn

      this.setAuthTimer(expiresInDuration)

      if (keepMelogedIn) {
        const now = new Date()
        const expirationDate = new Date((now.getTime() + expiresInDuration * 1000))
        this.saveAuthData(token, expirationDate, user)
      }

      this.router.navigate(['/admin'])
    }
  }


  ///--- Summary ---////
  /// Title : Loging out
  /// Description :
  /// Returning Args :
  logout() {
    this.setAuthenticated(false)
    this.token = null
    this.isAuthenticated = false
    clearTimeout(this.tokenTimer)
    this.clearAuthData()
    this.user = null
    this.router.navigate(['/admin/login'])
  }





  ///--- Summary ---////
  /// Title : Auto authenticate the user
  /// Description : Automatically authenticating the user
  /// Returning Args :
  autoAuthUser(navigateToDashBoard = false) {
    const authInfo = this.getAuthData()


    if (!authInfo) {
      return
    }
    const now = new Date()
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime()
    if (expiresIn > 0) {
      this.token = authInfo.token
      this.user = authInfo.user
      this.setAuthTimer(expiresIn / 1000)
      this.setAuthenticated(true)
      this.token = authInfo.token

      if (navigateToDashBoard) {
        this.router.navigate(['/admin'])
      }
    }
  }





  ///--- Summary ---////
  /// Title : Auth timer for token date
  /// Description : updating the ui based on the token expire date
  /// Returning Args :

  private setAuthTimer(duration) {
    this.tokenTimer = setTimeout(() => {
      this.logout()
    }, duration * 1000)
  }






  ///--- Summary ---////
  /// Title : getting the authintecation data from local storage
  /// Description :
  /// Returning Args :

  private getAuthData() {
    const token = localStorage.getItem('admin-token')
    const expirationDate = localStorage.getItem('admin-expirationDate')
    const firstName = localStorage.getItem('admin-firstName')
    const lastName = localStorage.getItem('admin-lastName')
    const id = localStorage.getItem('admin-id')

    if (!token || !expirationDate) {
      return
    }

    return {
      token: token,
      expirationDate: new Date(expirationDate),
      user: {
        firstName,
        lastName,
        _id: id
      }
    }
  }





  ///--- Summary ---////
  /// Title : Saving to local storage
  /// Description : saving the auth data to local storage
  /// Returning Args :

  saveAuthData(token: string, expirationDate: Date, user: { firstName: string, lastName: string, _id: string }) {
    localStorage.setItem('admin-token', token)
    localStorage.setItem('admin-expirationDate', expirationDate.toISOString())
    localStorage.setItem('admin-firstName', user.firstName)
    localStorage.setItem('admin-lastName', user.lastName)
    localStorage.setItem('admin-id', user._id)
  }



  ///--- Summary ---////
  /// Title : Clear auth data from local storage
  /// Description : clearing the local storage
  /// Returning Args :
  private clearAuthData() {
    localStorage.removeItem('admin-token')
    localStorage.removeItem('admin-expirationDate')
    localStorage.removeItem('admin-firstName')
    localStorage.removeItem('admin-lastName')
    localStorage.removeItem('admin-id')
  }


}
