import { Component, OnInit, Inject } from '@angular/core';
import { RepairService } from '../services/repair.service';
import { Device } from '../../models/Device';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  companies: { _id: string, name: string }[]
  devicesModel: Device[]
  viewNames={}


  constructor(private repairService: RepairService, @Inject(MAT_DIALOG_DATA) public data: { callback: Function }) { }

  ngOnInit(): void {
    this.getCompanies()
  }


  onSelected(event) {
    console.log(event);
    this.viewNames[event.source.ngControl.name] = event.source.triggerValue
    if (event.source.ngControl.name==='company')
      this.repairService.getDeviceModelByCompanyID(event.value).subscribe(devices => {
        this.devicesModel = devices.devices
      })

  }




  getCompanies() {
    this.repairService.getDeviceCompanies().subscribe(res => {
      console.log(res.message);
      this.companies = res.companies
    })
  }

  onAddingDevice(form: NgForm) {
    if (form.invalid)
      return



    const device = {
      device: form.value.device,
      notes: form.value.notes,
      price: form.value.price
    }
    this.data.callback(device,this.viewNames)
  }
}
