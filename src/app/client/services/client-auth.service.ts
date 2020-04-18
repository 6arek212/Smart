import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthData } from 'src/app/admin-components/interfaces/auth-data';
import { CustomerDbModel } from 'src/app/models/CustomerDbModel';
import { Router } from '@angular/router';
import { ClientAuthData } from '../client-login/client-auth-data-interface';
import { Customer } from 'src/app/models/Customer';


const BACKEND_URL = environment.apiUrl + 'customers/'

@Injectable({
  providedIn: 'root'
})
export class ClientAuthService {
  private isAuthenticated = false
  private isAuthenticatedListener = new Subject<boolean>()
  private isLoading = false
  private token: string
  private tokenTimer: any

  private user: { firstName: string, lastName: string, _id: string }
  private userListener = new Subject<{ firstName: string, lastName: string, _id: string }>()


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

  getUser() {
    return this.user
  }

  getUserListener() {
    return this.userListener.asObservable()
  }


  ngOnDestroy(): void {
    console.log('clientService died');

  }


  onSignUp(customer: CustomerDbModel) {
    this.isLoading = true
    this.http.post<{ message: string, token: string, expiresIn: number, user: { firstName: string, lastName: string, _id: string } }>(BACKEND_URL + 'signup', customer).subscribe(res => {
      console.log('signup success',res);
      this.authMethod(res)
      this.router.navigate(['/client'])

    }, err => {
      this.setAuthenticated(false)
    })
  }


  login(phoneNumber: string, password: string, keepMelogedIn: boolean = false) {
    const authData: ClientAuthData = { phone: phoneNumber, password }

    this.isLoading = true
    this.http.post<{ message: string, token: string, expiresIn: number, user: { firstName: string, lastName: string, _id: string } }>
      (BACKEND_URL + 'login', authData).subscribe(res => {

        this.authMethod(res, keepMelogedIn)
        this.router.navigate(['/client'])

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
      this.user = user
      this.userListener.next(this.user)

      const expiresInDuration = res.expiresIn

      this.setAuthTimer(expiresInDuration)

      if (keepMelogedIn) {
        const now = new Date()
        const expirationDate = new Date((now.getTime() + expiresInDuration * 1000))
        this.saveAuthData(token, expirationDate, user)
      }

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
    this.router.navigate(['/client/login'])
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
      this.userListener.next(this.user)
      this.setAuthTimer(expiresIn / 1000)
      this.setAuthenticated(true)


      if (navigateToDashBoard) {
        this.router.navigate(['/client'])
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



  getToken() {
    return this.token
  }


  ///--- Summary ---////
  /// Title : getting the authintecation data from local storage
  /// Description :
  /// Returning Args :

  private getAuthData() {
    const token = localStorage.getItem('client-token')
    const expirationDate = localStorage.getItem('client-expirationDate')
    const firstName = localStorage.getItem('client-firstName')
    const lastName = localStorage.getItem('client-lastName')
    const id = localStorage.getItem('client-id')

    if (!token || !expirationDate || !id || !firstName || !lastName) {
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



  updateUserData(customer: Customer) {
    console.log(customer);

    localStorage.setItem('client-firstName', customer.firstName)
    localStorage.setItem('client-lastName', customer.lastName)
    const authInfo = this.getAuthData()
    this.user = authInfo.user
    this.userListener.next(this.user)
  }



  ///--- Summary ---////
  /// Title : Saving to local storage
  /// Description : saving the auth data to local storage
  /// Returning Args :

  saveAuthData(token: string, expirationDate: Date, user: { firstName: string, lastName: string, _id: string }) {
    localStorage.setItem('client-token', token)
    localStorage.setItem('client-expirationDate', expirationDate.toISOString())
    localStorage.setItem('client-firstName', user.firstName)
    localStorage.setItem('client-lastName', user.lastName)
    localStorage.setItem('client-id', user._id)
  }



  ///--- Summary ---////
  /// Title : Clear auth data from local storage
  /// Description : clearing the local storage
  /// Returning Args :
  private clearAuthData() {
    localStorage.removeItem('client-token')
    localStorage.removeItem('client-expirationDate')
    localStorage.removeItem('client-firstName')
    localStorage.removeItem('client-lastName')
    localStorage.removeItem('client-id')
  }

}
