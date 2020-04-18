import { FormControl } from "@angular/forms";
import { Observable, Observer } from 'rxjs';

export const selectInput = (control: FormControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {

    if (control.value === '-1') {
      observer.next({ required: true })
    } else {
      observer.next(null)
    }

    observer.complete()
  })

  return frObs
}


export const nameCheck = (control: FormControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {
    const { value } = control
    if (/^[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value)) {
      observer.next(null)
    } else {
      observer.next({ name: true })
    }
    observer.complete()
  })

  return frObs
}



export const textCheck = (control: FormControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {
    const { value } = control
    if (/^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value)) {
      observer.next(null)
    } else {
      observer.next({ text: true })
    }
    observer.complete()
  })

  return frObs
}


export const matchPassword = (passwordControl: FormControl, verifyControl: FormControl) => {
  const password = passwordControl.value
  const verifyPassword = verifyControl.value

  if (password !== verifyPassword) {
    verifyControl.setErrors({
      ...verifyControl.errors,
      passwordNotMatch: true
    })
  }
}



export const phoneNumber = (control: FormControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {
    const value: string = control.value
    let flag = true


    if (!value || (!value && value.length === 0)) {
      observer.next({ required: true })
      flag = false
    }
    else if (value.length < 9) {
      observer.next({ minlength: { requiredLength: 9 } })
      flag = false
    }
    else {
      for (let i = 0; i < value.length && flag; i++) {
        if (value[i] > '9' || value[i] < '0') {
          observer.next({ phoneNumber: true })
          flag = false
        }
      }
    }

    if (flag) {
      observer.next(null)
    }

    observer.complete()
  })

  return frObs
}
