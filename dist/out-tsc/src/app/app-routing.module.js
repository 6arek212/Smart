import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RepairListComponent } from './admin-components/repair/repair-list/repair-list.component';
import { AddRepairComponent } from './admin-components/repair/add-repair/add-repair.component';
import { AddCustomerComponent } from './admin-components/add-customer/add-customer.component';
import { RepairDetailsComponent } from './admin-components/repair/repair-details/repair-details.component';
import { ClientAddRepairComponent } from './client/client-add-repair/client-add-repair.component';
import { AdminComponent } from './admin-components/admin/admin.component';
import { MainPageComponent } from './client/main-page/main-page.component';
import { RequestsListComponent } from './admin-components/requests-list/requests-list.component';
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
import { ClientProfileComponent } from './client/client-dashboard-main/client-profile/client-profile.component';
import { ClientAddRequestComponent } from './client/client-dashboard-main/client-add-request/client-add-request.component';
import { ClientDashboardMainComponent } from './client/client-dashboard-main/client-dashboard-main.component';
const routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'addRepair', component: AddRepairComponent, canActivate: [AuthGuard] },
            { path: 'addCustomer', component: AddCustomerComponent, canActivate: [AuthGuard] },
            { path: 'details', component: RepairDetailsComponent, canActivate: [AuthGuard] },
            { path: 'requests', component: RequestsListComponent, canActivate: [AuthGuard] },
            { path: '', component: RepairListComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    {
        path: 'admin/dashboard', component: MainDashboardComponent, children: [
            { path: '', component: DashboardComponent },
            { path: 'sms', component: SmsComponent },
        ]
    },
    { path: '', component: MainPageComponent },
    {
        path: 'client', component: ClientMainComponent, children: [
            {
                path: '', component: ClientDashboardMainComponent, children: [
                    { path: '', component: ClientDashboardComponent },
                    { path: 'profile', component: ClientProfileComponent },
                    { path: 'addRequest', component: ClientAddRequestComponent },
                    { path: 'editRequest/:requestId', component: ClientAddRequestComponent },
                ]
            },
            { path: 'signup', component: ClientSignupComponent },
            { path: 'login', component: ClientLoginComponent },
            { path: 'request', component: ClientAddRepairComponent }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        providers: [AuthGuard, ClientAuthGuard]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map