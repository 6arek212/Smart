import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent implements OnInit {
  @Input() errors: ValidationErrors;
  @Input() controller: NgModel;

  constructor() { }

  ngOnInit(): void {
  }


  getError() {
    if (!this.errors)
      return

    if (this.errors['required']) {
      return 'required'
    }


    if (this.errors['email']) {
      return 'email'
    }


    if (this.errors['email']) {
      return 'email'
    }


    if (this.errors['minlength']) {
      return 'minlength'
    }


    if (this.errors['maxlength']) {
      return 'maxlength'
    }

    if (this.errors['phoneNumber']) {
      return 'phoneNumber'
    }

    if (this.errors['passwordNotMatch']) {
      return 'passwordNotMatch'
    }


  }
}
