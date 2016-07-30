import { Component, OnInit, Input } from '@angular/core';
import { District, Building } from '../model/index';
import { BlockComponent } from '../block/block.component';


const EMPTY_BUILDING = '<td class="building"></td>';
@Component({
  moduleId: module.id,
  selector: 'district',
  templateUrl: 'district.component.html',
  styleUrls: ['district.component.css'],
  directives: [BlockComponent]
})
export class DistrictComponent implements OnInit {
  @Input()
  private district: District;

  constructor() { }

  ngOnInit() {
  }

  hasWall() {
    let wall = this.district
      .buildings
      .find(building => building.model === 'city-wall');
    return wall != undefined;
  }



  getBuilding(x: number, y: number): Building {
    return this.district.buildings.find(building => building.x == x && building.y == y);
  }
}
