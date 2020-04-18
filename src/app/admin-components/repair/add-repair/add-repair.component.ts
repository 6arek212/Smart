import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PickCustomerComponent } from 'src/app/admin-components/pick-customer/pick-customer.component';
import { Customer } from 'src/app/models/Customer';
import { RepairService } from 'src/app/admin-components/services/repair.service';
import { AddDeviceComponent } from 'src/app/admin-components/add-device/add-device.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css']
})
export class AddRepairComponent implements OnInit {
  customer: Customer
  devices: {
    company: string,
    device: string,
    notes: string,
    price: number
  }[] = []
  isLoading=false
  private loadingSub:Subscription

  viewsName: { company: string, device: string }[] = []

  constructor(private dilaog: MatDialog, private repairService: RepairService) { }

  ngOnInit(): void {
    this.loadingSub=this.repairService.getIsLoading().subscribe(res=>{
      this.isLoading=res
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.loadingSub.unsubscribe()
  }

  pickCustomer() {
    const ref = this.dilaog.open(PickCustomerComponent, {
      width: '80%',
      height: '90vh'
    })

    ref.afterClosed().subscribe(res => {
      console.log(res);
      this.customer = res
    })
  }


  addDevice() {
    const callback: Function = (device: {
      company: string,
      device: string,
      notes: string,
      price: number
    }, viewNames) => {
      console.log(device, viewNames);
      this.dilaog.closeAll()
      this.devices.push(device)
      this.viewsName.push(viewNames)
    }

    const ref = this.dilaog.open(AddDeviceComponent, {
      width: '80%',
      height: '90vh',
      data: { callback }
    })
  }


  deleteDevice(index: number) {
    console.log(index);
    const newArr = this.devices.filter((dev, i) => {
      return index !== i
    })

    const newViewsList = this.viewsName.filter((v, i) => {
      return index !== i
    })

    this.viewsName = newViewsList
    this.devices = newArr
  }




  onAddingRepair() {
    if (this.devices.length == 0)
      return

    if (!this.customer)
      return

    const repair = {
      customer: this.customer._id,
      devices: this.devices
    }

    console.log(repair);

    this.repairService.addRepair(repair)
  }



}
