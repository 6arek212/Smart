import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompaniesService } from 'src/app/globalServices/companies.service';
import { DevicesService } from 'src/app/globalServices/devices.service';
import { IssuesService } from 'src/app/globalServices/issues.service';
import { RequestsService } from 'src/app/globalServices/requests.service';
import { selectInput } from '../../../utils-components/validators';
import { ClientInfoService } from '../../services/client-info.service';
let ClientAddRequestComponent = class ClientAddRequestComponent {
    constructor(route, citiesService, comapniesService, requestsService, clientAuthService, issuesService, deviceService) {
        this.route = route;
        this.citiesService = citiesService;
        this.comapniesService = comapniesService;
        this.requestsService = requestsService;
        this.clientAuthService = clientAuthService;
        this.issuesService = issuesService;
        this.deviceService = deviceService;
        this.isLoading = false;
        this.mode = 'add';
        this.showMessage = false;
        this.issueValidator = (passwordControl, verifyControl) => {
            const password = passwordControl.value;
            const verifyPassword = verifyControl.value;
            if (password !== verifyPassword) {
                verifyControl.setErrors(Object.assign(Object.assign({}, verifyControl.errors), { passwordNotMatch: true }));
            }
        };
    }
    ngOnInit() {
        this.initForm();
        this.setUpListeners();
    }
    setUpListeners() {
        this.checkIfHasParam();
        this.citiesService.getCites();
        this.citiesSub = this.citiesService.getCitiesListener().subscribe(cities => {
            this.cities = cities;
        });
        this.comapniesService.getCompanies();
        this.companiesSub = this.comapniesService.getCompaniesListener().subscribe(companies => {
            this.companies = companies;
        });
        this.deviceSub = this.deviceService.getDevicesListener().subscribe(devices => {
            this.devices = devices;
        });
        this.issuesService.getIssues();
        this.issuesSub = this.issuesService.getIssuesListener().subscribe(issues => {
            this.issues = issues;
        });
    }
    checkIfHasParam() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('requestId')) {
                this.mode = 'edit';
                this.requestId = paramMap.get('requestId');
                this.isLoading = true;
                this.requestsService.getRequestById(this.requestId).subscribe(res => {
                    this.deviceService.getDevicesByCompanyId(res.request.company._id);
                    this.request = res.request;
                    console.log(res);
                    this.resetingForm(res.request);
                    this.isLoading = false;
                });
            }
            else {
                this.mode = 'add';
            }
        });
    }
    initForm() {
        this.form = new FormGroup({
            title: new FormControl(null, { validators: [Validators.required] }),
            company: new FormControl('-1', { asyncValidators: [selectInput] }),
            device: new FormControl('-1', { asyncValidators: [selectInput] }),
            issue: new FormControl('-1'),
            otherIssue: new FormControl(null),
            city: new FormControl('-1', { asyncValidators: [selectInput] }),
            whereAbout: new FormControl(null, { asyncValidators: [selectInput] })
        });
    }
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.citiesSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.companiesSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.deviceSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.issuesSub) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        clearTimeout(this.messageTimer);
    }
    onSelectCompany() {
        this.deviceService.getDevicesByCompanyId(this.form.get('company').value);
    }
    resetingForm(data = null) {
        if (!data) {
            this.form.setValue({
                'company': '-1',
                'device': '-1',
                'issue': '-1',
                'city': '-1'
            });
            return;
        }
        this.form.setValue({
            'title': data.title,
            'company': data.company._id,
            'device': data.device._id,
            'issue': data.issue._id,
            'city': data.city._id,
            'otherIssue': data.otherIssue,
            'whereAbout': data.whereAbout
        });
    }
    onAddingRequest(userId) {
        const request = {
            title: this.form.get('title').value,
            company: this.form.get('company').value,
            device: this.form.get('device').value,
            customer: userId,
            issue: this.form.get('issue').value,
            otherIssue: this.form.get('otherIssue').value,
            city: this.form.get('city').value,
            whereAbout: this.form.get('whereAbout').value
        };
        const success = () => {
            this.isLoading = false;
            this.showMessage = true;
            this.messageTimer = setTimeout(() => {
                this.showMessage = false;
            }, 3000);
            this.form.reset();
            this.resetingForm();
        };
        const error = () => {
            this.isLoading = false;
        };
        this.requestsService.addRequest(request, error, success);
    }
    onUpdatingRequest(userId) {
        const updateOps = [];
        const hash = Object.keys(this.form.value).map(name => ({ name, value: this.form.value[name] }));
        console.log(this.request);
        for (let i = 0; i < hash.length; i++) {
            if (hash[i]['name'] != this.request[hash[i].name]) {
                hash.splice(i, 1);
            }
            else {
                console.log('match', this.request[hash[i].name]._id);
            }
        }
        console.log(hash);
    }
    onAddingUpdatingRequest() {
        this.form.markAsTouched();
        if (this.form.invalid) {
            return;
        }
        const userId = this.clientAuthService.getUser()._id;
        if (!userId)
            return;
        this.isLoading = true;
        if (this.mode === 'edit') {
            this.onUpdatingRequest(userId);
        }
        else {
            this.onAddingRequest(userId);
        }
    }
};
ClientAddRequestComponent = __decorate([
    Component({
        selector: 'app-client-add-request',
        templateUrl: './client-add-request.component.html',
        styleUrls: ['./client-add-request.component.css'],
        providers: [CitiesService, CompaniesService, IssuesService, DevicesService, RequestsService, ClientInfoService]
    })
], ClientAddRequestComponent);
export { ClientAddRequestComponent };
//# sourceMappingURL=client-add-request.component.js.map