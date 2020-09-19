import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DevicesService } from 'src/app/globalServices/devices.service';
import { environment } from 'src/environments/environment';
import { mimeType } from '../mime-type.validator';


const BACKEND = environment.url
@Component({
  selector: 'app-devices-manage',
  templateUrl: './devices-manage.component.html',
  styleUrls: ['./devices-manage.component.css']
})
export class DevicesManageComponent implements OnInit {
  devices
  private deviceSub: Subscription
  form: FormGroup
  @Input() companies
  imagePreview: string
  isLoading = false

  minDate: Date;
  maxDate: Date;
  mode = 'add'

  constructor(private deviceService: DevicesService) { }


  ngOnInit(): void {
    this.maxDate = new Date();
    this.minDate = new Date('2005')

    this.form = new FormGroup({
      model: new FormControl(null, { validators: [Validators.required] }),
      released: new FormControl(null, { validators: [Validators.required] }),
      company: new FormControl(null, { validators: [Validators.required] }),
      devices: new FormControl(null),
      image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] })
    })

    this.deviceService.getDevices()
    this.deviceSub = this.deviceService.getDevicesListener().subscribe(devices => {
      this.devices = devices
    })
  }



  onAddingDevice() {
    if (this.form.invalid)
      return
    console.log(this.form);

    this.isLoading = true
    const { company, released, model, image } = this.form.value


    if (this.mode == 'add') {
      this.deviceService.addDevice(model, released, company, image).subscribe(res => {
        console.log(res);
        this.deviceService.getDevices()
        this.isLoading = false
        this.imagePreview = null
        this.form.reset()
      }, (err) => { this.isLoading = false })
    }
    else {
      console.log(image);
      this.deviceService.updateDevice(this.form.value.devices._id, model, released, company, image).subscribe(res => {
        console.log(res);
        this.deviceService.getDevices()
        this.isLoading = false
        this.mode = 'add'
        this.imagePreview = null
        this.form.reset()
      }, (err) => { this.isLoading = false })
    }
  }



  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.form.patchValue({ image: file })
    this.form.get('image').updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file)
  }



  onUpdateMode() {
    if (!this.form.value.devices)
      return
    this.form.get('model').setValue(this.form.value.devices.model)
    this.form.get('released').setValue(this.form.value.devices.released)
    this.form.get('company').setValue(this.form.value.devices.company._id)
    this.imagePreview = BACKEND + 'devices/' + this.form.value.devices.image
    this.mode = 'edit'
    this.form.get('image').setErrors(null)
  }


  ngOnDestroy(): void {
    this.deviceSub?.unsubscribe()
  }

}
