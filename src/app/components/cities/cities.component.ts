import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CitiesService } from '../../services';

@Component({
    selector: 'app-cities',
    templateUrl: 'cities.component.html',
    styleUrls: ['cities.component.scss']
})
export class CitiesComponent implements OnInit {
    $cities: Observable<string[]>;
    $selectedCity: Observable<String>;

    constructor(private service: CitiesService) { }

    ngOnInit() {
        this.$cities = this.service.getCities();
    }
}
