import { Component, OnInit, Input } from '@angular/core';
import { City } from '../model/city';
import { DistrictComponent } from '../district';

@Component({
  selector: 'city',
  templateUrl: 'city.component.html',
  styleUrls: ['city.component.css']
})
export class CityComponent implements OnInit {
  @Input()
  private city: City;

  constructor() { }

  ngOnInit() {
  }

}
