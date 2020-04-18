import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app-normal-input-error',
  templateUrl: './normal-input-error.component.html',
  styleUrls: ['./normal-input-error.component.css']
})
export class NormalInputErrorComponent implements OnInit {
  @Input() errors: ValidationErrors;
  @Input() name: string


  constructor() {
  }

  ngOnInit(): void {
  }

}
