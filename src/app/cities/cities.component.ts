import { Component, OnInit } from '@angular/core';
import { City } from '../model';
import { CitiesService } from '../cities.service';
import { CityComponent } from '../city';

@Component({
  moduleId: module.id,
  selector: 'app-cities',
  templateUrl: 'cities.component.html',
  styleUrls: ['cities.component.css'],
  directives: [CityComponent]
})
export class CitiesComponent implements OnInit {
  cities: City[];
  selectedCity: City;
  addingHero = false;
  error: any;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }

  onSelect(city: City) {
    this.selectedCity = city;
  }

  getCities() {
    this.citiesService
      .getCities()
      .then(cities => this.cities = cities)
      .catch(error => this.error = error);
  }
}
