import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Repair } from 'src/app/models/Repair';
import { RepairService } from '../../services/repair.service';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[]
  pipe = new DatePipe('en-US'); // Use your own locale


  constructor(private repairService: RepairService) { }

  ngOnInit(): void {
    this.repairs = this.repairService.getRepairs()
  }

}
