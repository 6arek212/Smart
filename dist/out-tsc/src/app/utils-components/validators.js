import { Observable } from 'rxjs';
export const selectInput = (control) => {
    const frObs = Observable.create((observer) => {
        if (control.value === '-1') {
            observer.next({ required: true });
        }
        else {
            observer.next(null);
        }
        observer.complete();
    });
    return frObs;
};
export const nameCheck = (control) => {
    const frObs = Observable.create((observer) => {
        const { value } = control;
        if (/^[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value)) {
            observer.next(null);
        }
        else {
            observer.next({ name: true });
        }
        observer.complete();
    });
    return frObs;
};
export const matchPassword = (passwordControl, verifyControl) => {
    const password = passwordControl.value;
    const verifyPassword = verifyControl.value;
    if (password !== verifyPassword) {
        verifyControl.setErrors(Object.assign(Object.assign({}, verifyControl.errors), { passwordNotMatch: true }));
    }
};
export const phoneNumber = (control) => {
    const frObs = Observable.create((observer) => {
        const value = control.value;
        let flag = true;
        if (!value || (!value && value.length === 0)) {
            observer.next({ required: true });
            flag = false;
        }
        else if (value.length < 9) {
            observer.next({ minlength: { requiredLength: 9 } });
            flag = false;
        }
        else {
            for (let i = 0; i < value.length && flag; i++) {
                if (value[i] > '9' || value[i] < '0') {
                    observer.next({ phoneNumber: true });
                    flag = false;
                }
            }
        }
        if (flag) {
            observer.next(null);
        }
        observer.complete();
    });
    return frObs;
};
//# sourceMappingURL=validators.js.map