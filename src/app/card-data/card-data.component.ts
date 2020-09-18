import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})


export class CardDataComponent implements OnInit {

  @Input() data: { name: string, value: string }[]
  colors=['#5AA454','#E44D25','#CFC0BB','#7AA3E5']

  constructor() { }

  ngOnInit(): void {
  }

}
