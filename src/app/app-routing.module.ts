import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairListComponent } from './admin-components/repair/repair-list/repair-list.component';
import { AddRepairComponent } from './admin-components/repair/add-repair/add-repair.component';
import { AddCustomerComponent } from './admin-components/add-customer/add-customer.component';
import { RepairDetailsComponent } from './admin-components/repair/repair-details/repair-details.component';
import { AdminComponent } from './admin-components/admin/admin.component';
import { MainPageComponent } from './client/main-page/main-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './admin-components/dashboard/dashboard/dashboard.component';
import { MainDashboardComponent } from './admin-components/dashboard/main-dashboard/main-dashboard.component';
import { SmsComponent } from './admin-components/dashboard/sms/sms.component';
import { ClientMainComponent } from './client/client-main/client-main.component';
import { ClientAuthGuard } from './client/client-auth.guard';
import { ClientDashboardComponent } from './client/client-dashboard-main/client-dashboard/client-dashboard.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { ClientSignupComponent } from './client/client-signup/client-signup.component';
import { ClientAuthService } from './client/services/client-auth.service';
import { ClientProfileComponent } from './client/client-dashboard-main/client-profile/client-profile.component';
import { ClientAddRequestComponent } from './client/client-dashboard-main/client-add-request/client-add-request.component';
import { ClientDashboardMainComponent } from './client/client-dashboard-main/client-dashboard-main.component';
import { CustomersComponent } from './admin-components/dashboard/customers/customers.component';
import { RequestsListComponent } from './admin-components/dashboard/requests-list/requests-list.component';
import { InfoComponent } from './admin-components/dashboard/info/info.component';
import { ForgotPasswordComponent } from './client/forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path: 'admin', children: [
      {
        path: '', canActivate: [AuthGuard], component: MainDashboardComponent, children: [
          { path: '', pathMatch: 'full', component: DashboardComponent, canActivate: [AuthGuard] },
          { path: 'sms', component: SmsComponent, canActivate: [AuthGuard] },
          { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
          { path: 'requests', component: RequestsListComponent, canActivate: [AuthGuard] },
          { path: 'info', component: InfoComponent, canActivate: [AuthGuard] },

        ]
      },
      { path: 'login', pathMatch: 'full', component: LoginComponent }
    ]
  },
  { path: '', component: MainPageComponent },
  {
    path: 'client', component: ClientMainComponent, children: [
      {
        path: '', component: ClientDashboardMainComponent, children: [
          { path: '', pathMatch: 'full', component: ClientDashboardComponent, canActivate: [ClientAuthGuard] },
          { path: 'profile', component: ClientProfileComponent, canActivate: [ClientAuthGuard] },
          { path: 'addRequest', component: ClientAddRequestComponent, canActivate: [ClientAuthGuard] },
          { path: 'editRequest/:requestId', component: ClientAddRequestComponent, canActivate: [ClientAuthGuard] },
        ]
      },
      { path: 'signup', component: ClientSignupComponent },
      { path: 'login', component: ClientLoginComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, ClientAuthGuard]
})
export class AppRoutingModule { }
