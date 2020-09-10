import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './admin-components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatDividerModule } from '@angular/material/divider'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AdminComponent } from './admin-components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './admin-components/add-customer/add-customer.component';
import { InputErrorComponent } from './utils-components/input-error/input-error.component';
import { DialogMessageComponent } from './utils-components/dialog-message/dialog-message.component';
import { PickCustomerComponent } from './admin-components/pick-customer/pick-customer.component';
import { MainPageComponent } from './client/main-page/main-page.component'
import { AuthInterceptor } from './auth/auth-interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './admin-components/dashboard/dashboard/dashboard.component';
import { VerticalBarsComponent } from './admin-components/dashboard/charts/vertical-bars/vertical-bars.component';
import { MainDashboardComponent } from './admin-components/dashboard/main-dashboard/main-dashboard.component';
import { SmsComponent } from './admin-components/dashboard/sms/sms.component';
import { PhoneAuthComponent } from './utils-components/phone-auth/phone-auth.component';
import { ClientMainComponent } from './client/client-main/client-main.component';
import { ClientPhoneAuthComponent } from './client/client-phone-auth/client-phone-auth.component';
import { NormalInputErrorComponent } from './utils-components/normal-input-error/normal-input-error.component';
import { ErrorInterceptor } from './error-interceptor';
import { PhoneAuthService } from './utils-components/phone-auth/phone-auth.service';
import { ClientDashboardComponent } from './client/client-dashboard-main/client-dashboard/client-dashboard.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { ClientSignupComponent } from './client/client-signup/client-signup.component';
import { ClientAuthService } from './client/services/client-auth.service';
import { ClientAddRequestComponent } from './client/client-dashboard-main/client-add-request/client-add-request.component';
import { ClientProfileComponent } from './client/client-dashboard-main/client-profile/client-profile.component';
import { ClientDashboardMainComponent } from './client/client-dashboard-main/client-dashboard-main.component';
import { CustomersComponent } from './admin-components/dashboard/customers/customers.component';
import { RequestsListComponent } from './admin-components/dashboard/requests-list/requests-list.component';
import { ClassDirectiveDirective } from './directives/class-directive.directive';
import { BootstrapDialogComponent } from './utils-components/bootstrap-dialog/bootstrap-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditCustomerDialogComponent } from './utils-components/edit-customer-dialog/edit-customer-dialog.component';
import { InfoComponent } from './admin-components/dashboard/info/info.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPhoneDialogComponent } from './utils-components/edit-phone-dialog/edit-phone-dialog.component';
import { ForgotPasswordComponent } from './client/forgot-password/forgot-password.component';
import { MessagesComponent } from './utils-components/messages/messages.component';
import {MatIconModule} from '@angular/material/icon';
import { RequestComponent } from './admin-components/dashboard/request/request.component';
import { ReceiptFormComponent } from './admin-components/dashboard/receipt-form/receipt-form.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    AddCustomerComponent,
    AdminComponent,
    InputErrorComponent,
    DialogMessageComponent,
    PickCustomerComponent,
    MainPageComponent,
    RequestsListComponent,
    DashboardComponent,
    VerticalBarsComponent,
    MainDashboardComponent,
    SmsComponent,
    PhoneAuthComponent,
    ClientMainComponent,
    ClientPhoneAuthComponent,
    NormalInputErrorComponent,
    ClientDashboardComponent,
    ClientLoginComponent,
    ClientSignupComponent,
    ClientAddRequestComponent,
    ClientProfileComponent,
    ClientDashboardMainComponent,
    CustomersComponent,
    ClassDirectiveDirective,
    BootstrapDialogComponent,
    EditCustomerDialogComponent,
    InfoComponent,
    EditPhoneDialogComponent,
    ForgotPasswordComponent,
    MessagesComponent,
    RequestComponent,
    ReceiptFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxChartsModule,

    NgbModule,
    ModalModule,

    MatIconModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, PhoneAuthService, ClientAuthService],
  bootstrap: [AppComponent],
  entryComponents: [PickCustomerComponent, DialogMessageComponent]
})
export class AppModule { }
