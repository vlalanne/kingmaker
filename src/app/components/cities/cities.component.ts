import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../../models';
import { CitiesService } from '../../services';

@Component({
  selector: 'app-cities',
  templateUrl: 'cities.component.html',
  styleUrls: ['cities.component.scss']
})
export class CitiesComponent implements OnInit, OnDestroy {
  cities: City[];
  selectedCity: City;
  addingHero = false;
  error: any;
  private sub: any;

  constructor(private citiesService: CitiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService
      .getCities()
      .then(cities => {
        this.cities = cities;
        this.sub = this.route.params.subscribe(params => {
          const id = params['selected'];
          if (id) {
            this.selectedCity = this.cities.find(city => id.toLowerCase() === city.name.toLowerCase());
          } else {
            this.selectedCity = this.cities[0];
          }
        });
      })
      .catch(error => this.error = error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
