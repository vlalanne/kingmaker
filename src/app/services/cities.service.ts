import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { City } from '../models';

@Injectable()
export class CitiesService {

    private citiesUrl = 'data/cities.json';  // URL to web api

    constructor(private http: Http) { }

    getCities(): Observable<string[]> {
        return this.getJson()
            .map(cities => cities.map(city => city.name));
    }

    private getJson(): Observable<City[]> {
        return this.http.get(this.citiesUrl)
            .map(response => response.json())
            .catch(this.handleError);
    }

    getCity(id: string): Observable<City> {
        return this.getJson()
            .map(cities => cities.filter(city => id.toLowerCase() === city.name.toLowerCase())[0]);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}



