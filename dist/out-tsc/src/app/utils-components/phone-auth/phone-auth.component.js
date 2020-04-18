import { __decorate } from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { selectInput, phoneNumber } from '../validators';
let PhoneAuthComponent = class PhoneAuthComponent {
    constructor(phoneService, router) {
        this.phoneService = phoneService;
        this.router = router;
        this.isDone = new EventEmitter();
        this.isLoading = false;
        this.authError = false;
        this.authSuccess = false;
        this.step = 1;
        this.numberOfDigits = 5;
        this.numberArr = [];
        for (let i = 0; i < this.numberOfDigits; i++) {
            this.numberArr[i] = i + 1;
        }
    }
    ngOnInit() {
        this.setUpForms();
        this.isVerifiedSub = this.phoneService.getIsVierifiedListener().subscribe(isVerified => {
            this.isLoading = false;
            this.authSuccess = isVerified;
            if (!isVerified) {
                this.formNumberVerify.reset();
                document.getElementById('input1').focus();
                this.isLoading = false;
                this.authError = true;
            }
            if (isVerified) {
                if (this.nav)
                    this.router.navigate([this.nav]);
                else {
                    this.isDone.emit(true);
                }
            }
        });
    }
    ngOnDestroy() {
        this.isVerifiedSub.unsubscribe();
    }
    setUpForms() {
        this.formNumberValidate = new FormGroup({
            'countryCode': new FormControl('-1', {
                asyncValidators: [selectInput]
            }),
            'phoneNumber': new FormControl(null, { asyncValidators: [phoneNumber] }),
        });
        this.formNumberVerify = new FormGroup({
            'input1': new FormControl(null),
            'input2': new FormControl(null),
            'input3': new FormControl(null),
            'input4': new FormControl(null),
            'input5': new FormControl(null)
        });
    }
    onSelect(controler) {
        controler.markAsTouched();
    }
    nextFocus(num, event) {
        if (num <= this.numberOfDigits) {
            this.authError = false;
            if (num > 2 && event.code === 'Backspace') {
                const element = document.getElementById('input' + (num - 2));
                element.focus();
                element.setSelectionRange(0, element.value.length);
                return;
            }
            else if (event.code !== 'Backspace') {
                const parent = document.getElementById('input' + (num - 1));
                if (parent.value !== '') {
                    const element = document.getElementById('input' + num);
                    element.focus();
                }
            }
        }
        else {
            if (!this.phoneService.getPhoneAuthId()) {
                if (event.code === 'Backspace') {
                    const element = document.getElementById('input' + (num - 2));
                    element.setSelectionRange(0, element.value.length);
                    element.focus();
                }
                return;
            }
            this.isLoading = true;
            let code = '';
            for (let i = 1; i <= 5; i++) {
                code += this.formNumberVerify.value['input' + i];
            }
            this.phoneService.verifyPhone(code, this.phoneService.getPhoneAuthId());
        }
    }
    onSendingSMS() {
        console.log(this.formNumberValidate.controls);
        if (this.formNumberValidate.invalid) {
            this.formNumberValidate.markAllAsTouched();
            return;
        }
        const { phoneNumber, countryCode } = this.formNumberValidate.value;
        this.isLoading = true;
        this.phoneService.sendSMS(countryCode, phoneNumber, () => {
            this.step++;
            this.isLoading = false;
        }, () => {
            this.authError = false;
            this.authSuccess = false;
            this.isLoading = false;
        });
    }
};
__decorate([
    Output()
], PhoneAuthComponent.prototype, "isDone", void 0);
__decorate([
    Input()
], PhoneAuthComponent.prototype, "nav", void 0);
PhoneAuthComponent = __decorate([
    Component({
        selector: 'app-phone-auth',
        templateUrl: './phone-auth.component.html',
        styleUrls: ['./phone-auth.component.css']
    })
], PhoneAuthComponent);
export { PhoneAuthComponent };
//# sourceMappingURL=phone-auth.component.js.map