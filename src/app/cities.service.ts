import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { City } from './model';

@Injectable()
export class CitiesService {

  private citiesUrl = 'data/cities.json';  // URL to web api
  constructor(private http: Http) { }
  getCities(): Promise<City[]> {
    return this.http.get(this.citiesUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}



