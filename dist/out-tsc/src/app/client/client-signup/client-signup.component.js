import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { selectInput, nameCheck, matchPassword } from '../../utils-components/validators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { PhoneAuthService } from 'src/app/utils-components/phone-auth/phone-auth.service';
let ClientSignupComponent = class ClientSignupComponent {
    constructor(citiesService, clientAuth, phoneAuthService) {
        this.citiesService = citiesService;
        this.clientAuth = clientAuth;
        this.phoneAuthService = phoneAuthService;
        this.step = 1;
        this.isLinear = false;
        this.forms = [];
        this.cities = [];
    }
    ngOnInit() {
        this.citiesService.getCites();
        this.citiesSub = this.citiesService.getCitiesListener().subscribe(cities => {
            this.cities = cities;
        });
        this.forms['personalInfo'] = new FormGroup({
            firstName: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(2)],
                asyncValidators: [nameCheck]
            }),
            lastName: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(2)]
            }),
            city: new FormControl('-1', {
                asyncValidators: [selectInput]
            }),
            gender: new FormControl('male', {
                validators: [Validators.required]
            })
        });
        this.forms['phoneAuth'] = new FormGroup({
            phoneIsValid: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(3)]
            })
        });
        this.forms['password'] = new FormGroup({
            password: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
            }),
            verifyPassword: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
            })
        });
        // this.forms[1] = new FormGroup({
        // })
    }
    ngOnDestroy() {
        this.citiesSub.unsubscribe();
    }
    isDone(e, steper) {
        this.forms['phoneAuth'].controls.phoneIsValid.setValue(true);
        steper.next();
    }
    nextStep() {
        if (this.forms[this.step - 1].invalid)
            return;
        this.step++;
        console.log(this.step);
    }
    checkPasswordMatch() {
        matchPassword(this.forms['password'].controls.password, this.forms['password'].controls.verifyPassword);
        this.forms['password'].controls.verifyPassword.markAsTouched();
    }
    onSingUp() {
        for (const form of this.forms) {
            if (form.invalid)
                return;
        }
        const { phoneNumber, countryCode } = this.phoneAuthService.getPhoneNumberAndCountryCode();
        const customer = {
            firstName: this.forms['personalInfo'].get('firstName').value,
            lastName: this.forms['personalInfo'].get('lastName').value,
            city: this.forms['personalInfo'].get('city').value,
            gender: this.forms['personalInfo'].get('gender').value,
            phone: phoneNumber,
            countryCode,
            password: this.forms['password'].get('password').value
        };
        this.clientAuth.onSignUp(customer);
    }
};
ClientSignupComponent = __decorate([
    Component({
        selector: 'app-client-signup',
        templateUrl: './client-signup.component.html',
        styleUrls: ['./client-signup.component.css'],
        providers: [CitiesService, PhoneAuthService, {
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
            }]
    })
], ClientSignupComponent);
export { ClientSignupComponent };
//# sourceMappingURL=client-signup.component.js.map