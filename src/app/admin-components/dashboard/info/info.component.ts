import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/globalServices/cities.service';
import { IssuesService } from 'src/app/globalServices/issues.service';
import { CompaniesService } from 'src/app/globalServices/companies.service';
import { DevicesService } from 'src/app/globalServices/devices.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [DevicesService, CompaniesService, IssuesService, CitiesService]
})
export class InfoComponent implements OnInit {


  cities
  private citiesSub: Subscription
  companies
  private companiesSub: Subscription

  issues
  private issuesSub: Subscription

  isLoading = false


  constructor(private cityService: CitiesService, private issueService: IssuesService, private comapnyService: CompaniesService) { }

  ngOnInit(): void {


    this.cityService.getCites()
    this.citiesSub = this.cityService.getCitiesListener().subscribe(cities => {
      this.cities = cities
    })

    this.comapnyService.getCompanies()
    this.companiesSub = this.comapnyService.getCompaniesListener().subscribe(companies => {
      this.companies = companies
    })

    this.issueService.getIssues()
    this.issuesSub = this.issueService.getIssuesListener().subscribe(issues => {
      this.issues = issues
    })



  }


  onAddingCity(form: NgForm) {
    const city = form.value.city
    this.cityService.addCity(city).subscribe(res => {
      console.log(res);
      this.cityService.getCites()
    })
  }


  onDeletingCity(form: NgForm) {
    const cityId = form.value.pickCity
    console.log(cityId);
    if (!form.value.pickCity)
      return
    this.cityService.deleteCity(cityId).subscribe(res => {
      this.cityService.getCites()
    })
  }


  onAddingIssue(form: NgForm) {
    const issue = form.value.issue
    this.issueService.addIssue(issue).subscribe(res => {
      console.log(res);
      this.issueService.getIssues()
    })
  }

  onDeletingIssue(form: NgForm) {
    const issueId = form.value.pickedIssue
    this.issueService.deleteIssue(issueId).subscribe(res => {
      this.issueService.getIssues()
    })
  }


  onAddingCompany(form: NgForm) {
    console.log(form);

    const company = form.value.company
    this.comapnyService.addCompany(company).subscribe(res => {
      console.log(res);
      this.comapnyService.getCompanies()
    })
  }







  ngOnDestroy(): void {
    this.citiesSub?.unsubscribe()
    this.companiesSub?.unsubscribe()
    this.issuesSub?.unsubscribe()
  }

}
