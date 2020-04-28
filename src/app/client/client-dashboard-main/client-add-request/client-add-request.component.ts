import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { Subscription, Observable, Observer } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompaniesService } from 'src/app/globalServices/companies.service';
import { DevicesService } from 'src/app/globalServices/devices.service';
import { IssuesService } from 'src/app/globalServices/issues.service';
import { RequestDbModel } from 'src/app/models/RequestDbModel';
import { RequestsService } from 'src/app/globalServices/requests.service';
import { ClientAuthService } from '../../services/client-auth.service';
import { selectInput } from '../../../utils-components/validators'
import { ClientInfoService } from '../../services/client-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Request } from 'src/app/models/Request';
import { textCheck } from '../../../utils-components/validators'

@Component({
  selector: 'app-client-add-request',
  templateUrl: './client-add-request.component.html',
  styleUrls: ['./client-add-request.component.css'],
  providers: [CitiesService, CompaniesService, IssuesService, DevicesService, RequestsService, ClientInfoService]
})
export class ClientAddRequestComponent implements OnInit {
  cities
  private citiesSub: Subscription
  companies
  private companiesSub: Subscription
  devices
  private deviceSub: Subscription
  issues
  private issuesSub: Subscription
  isLoading = false

  mode = 'add'
  requestId: string
  request: Request
  requestSub: Subscription

  message = null
  messageTimer

  form: FormGroup


  constructor(private route: ActivatedRoute, private citiesService: CitiesService, private comapniesService: CompaniesService,
    private requestsService: RequestsService, private clientAuthService: ClientAuthService,
    private issuesService: IssuesService, private deviceService: DevicesService) { }


  ngOnInit(): void {
    this.initForm()
    this.setUpListeners()
  }


  setUpListeners() {
    this.checkIfHasParam()

    this.citiesService.getCites()
    this.citiesSub = this.citiesService.getCitiesListener().subscribe(cities => {
      this.cities = cities
    })

    this.comapniesService.getCompanies()
    this.companiesSub = this.comapniesService.getCompaniesListener().subscribe(companies => {
      this.companies = companies
      this.devices = null
    })


    this.deviceSub = this.deviceService.getDevicesListener().subscribe(devices => {
      if (!this.devices)
        this.devices = devices
    })

    this.issuesService.getIssues()
    this.issuesSub = this.issuesService.getIssuesListener().subscribe(issues => {
      this.issues = issues
    })
  }





  checkIfHasParam() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('requestId')) {
        this.mode = 'edit'
        this.requestId = paramMap.get('requestId')

        this.isLoading = true
        this.requestsService.getRequestById(this.requestId)

        this.requestSub = this.requestsService.getRequestListener().subscribe(res => {
          this.deviceService.getDevicesByCompanyId(res.company._id)

          this.request = res

          this.resetingForm(res)


          this.isLoading = false
        })


      } else {
        this.mode = 'add'
      }

    })
  }




  initForm() {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required], asyncValidators: [textCheck] }),
      company: new FormControl('-1', { asyncValidators: [selectInput] }),
      device: new FormControl('-1', { asyncValidators: [selectInput] }),
      issue: new FormControl('-1', { asyncValidators: [selectInput] }),
      otherIssue: new FormControl(null, { asyncValidators: [this.issueCheck] }),
      city: new FormControl('-1', { asyncValidators: [selectInput] }),
      whereAbout: new FormControl(null, { validators: [Validators.required], asyncValidators: [textCheck] })
    })
  }



  issueCheck = (control: FormControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
    const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {
      const { value } = control
      if (this.form?.get('issue').value === '1') {
        if (!(/^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value))) {
          observer.next({ text: true })
        } else if (value?.length === 0 || !value) {
          observer.next({ required: true })
        }
        else {
          observer.next(null)
        }
      }
      else {
        observer.next(null)
      }

      observer.complete()
    })

    return frObs
  }



  onChangeIssue() {
    const issue = this.form?.get('issue')
    const otherIssue = this.form?.get('otherIssue')

    if (issue?.value !== '1') {
      otherIssue.setErrors(null)
    }
  }



  ngOnDestroy(): void {
    this.citiesSub?.unsubscribe()
    this.companiesSub?.unsubscribe()
    this.deviceSub?.unsubscribe()
    this.issuesSub?.unsubscribe()
    this.requestSub?.unsubscribe()
    clearTimeout(this.messageTimer)
  }



  onSelectCompany() {
    this.devices = null
    this.form.get('device').setValue('-1')
    this.deviceService.getDevicesByCompanyId(this.form.get('company').value)
  }



  resetingForm(data: Request = null) {
    if (!data) {
      this.form.setValue({
        'company': '-1',
        'device': '-1',
        'issue': '-1',
        'city': '-1',
        'title': null,
        'whereAbout': null,
        'otherIssue': null
      })
      return
    }

    this.form.setValue({
      'title': data.title,
      'company': data.company._id,
      'device': data.device._id,
      'issue': data.issue ? data.issue._id : '1',
      'city': data.city._id,
      'otherIssue': data.otherIssue,
      'whereAbout': data.whereAbout
    })
  }



  onAddingRequest(userId) {

    const issue = this.form.get('issue').value

    const request: RequestDbModel = {
      title: this.form.get('title').value,
      company: this.form.get('company').value,
      device: this.form.get('device').value,
      customer: userId,
      issue: issue === '1' ? null : issue,
      otherIssue: this.form.get('otherIssue').value,
      city: this.form.get('city').value,
      whereAbout: this.form.get('whereAbout').value
    }

    const success = () => {
      this.isLoading = false
      this.message = 'تم قبول طلبك بنجاح'

      this.startTimer()

      this.form.reset()
      this.resetingForm()
    }
    const error = () => {
      this.isLoading = false
    }

    this.requestsService.addRequest(request, error, success)
  }


  startTimer() {
    this.messageTimer = setTimeout(() => {
      this.message = null
    }, 3000)
  }



  onUpdatingRequest() {
    const updateOps = []

    const hash = Object.keys(this.form.value).map(name => ({ name, value: this.form.value[name] }))

    for (let i = 0, k = 0; i < hash.length; i++) {
      if (hash[i].value != this.request[hash[i].name] && hash[i].value != this.request[hash[i].name]?._id) {
        if (hash[i].name === 'issue' && hash[i].value === '1') {
          hash[i].value = null
        }
        else {
          updateOps[k++] = {
            'name': hash[i].name,
            'value': hash[i].value
          }
        }
      }
    }




    if (updateOps.length > 0)
      this.requestsService.updateReuqest(this.requestId, updateOps).subscribe(res => {
        this.startTimer()
        this.isLoading = false
        this.message = 'تم التعديل بنجاح'
        this.requestsService.getRequestById(this.requestId)
      })
    else {
      this.isLoading = false
      this.startTimer()
      this.message = 'لم تقم بتعديل اي حقل'
    }
  }



  onAddingUpdatingRequest() {
    this.form.markAllAsTouched()
    this.form.markAsTouched()



    if (this.form.invalid) {
      return
    }

    const userId = this.clientAuthService.getUser()._id

    if (!userId)
      return

    this.isLoading = true


    if (this.mode === 'edit') {
      this.onUpdatingRequest()

    } else {
      this.onAddingRequest(userId)
    }

  }
}
