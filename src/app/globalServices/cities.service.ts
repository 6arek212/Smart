import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const BACKEND_URL = environment.apiUrl + 'cities/'

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities: { _id: string, name: string }[]
  private citiesListener = new Subject<{ _id: string, name: string }[]>()

  constructor(private http: HttpClient) { }


  getCitiesListener() {
    return this.citiesListener.asObservable()
  }

  getCites() {
    this.http.get<{ message: string, cities: { _id: string, name: string }[] }>(BACKEND_URL).subscribe(res => {
      this.cities = res.cities
      this.citiesListener.next([...this.cities])
    })
  }


  addCity(name: string) {
    return this.http.post<{ message: string }>(BACKEND_URL, { name })
  }



  deleteCity(cityId: string) {
    return this.http.delete<{ message: string }>(BACKEND_URL + cityId)
  }

}
