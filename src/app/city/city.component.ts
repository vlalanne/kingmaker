import { Component, OnInit, Input } from '@angular/core';
import { City } from '../model/city';
import { DistrictComponent } from '../district';

@Component({
  selector: 'city',
  templateUrl: 'city.component.html',
  styleUrls: ['city.component.scss']
})
export class CityComponent implements OnInit {
  @Input()
  city: City;

  constructor() { }

  ngOnInit() {
  }

}
