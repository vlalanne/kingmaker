import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models';

@Component({
  selector: 'app-city',
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
