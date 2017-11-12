import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CitiesService } from '../../services';
import { City } from '../../models';

@Component({
    selector: 'app-city',
    templateUrl: 'city.component.html',
    styleUrls: ['city.component.scss']
})
export class CityComponent implements OnInit {
    $city: Observable<City>;

    constructor(private service: CitiesService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.$city = this.route.params
            .map(params => params['selected'])
            .flatMap(city => this.service.getCity(city));
    }

}
