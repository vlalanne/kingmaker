import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private sub: any;

  constructor(private citiesService: CitiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCities();
  }

  onSelect(city: City) {
    this.router.navigate(['/cities/' + city.id]);
  }

  getCities() {
    this.citiesService
      .getCities()
      .then(cities => {
        this.cities = cities;
        this.sub = this.route.params.subscribe(params => {
          let id = params['selected'];
          if (id) {
            this.selectedCity = this.cities.find(city => id === city.id);
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
