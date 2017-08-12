import { Component, OnInit, Input } from '@angular/core';
import { District, Building } from '../../models';


@Component({
  selector: 'app-district',
  templateUrl: 'district.component.html',
  styleUrls: ['district.component.scss']
})
export class DistrictComponent implements OnInit {
  @Input()
  district: District;

  constructor() { }

  ngOnInit() {
  }

  hasWall() {
    const wall = this.district
      .buildings
      .find(building => building.model === 'city-wall');
    return !!wall;
  }



  getBuilding(x: number, y: number): Building {
    return this.district.buildings.find(building => building.x === x && building.y === y);
  }
}
