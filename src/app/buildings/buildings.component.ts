import { Component, OnInit } from '@angular/core';
import { BuildingsService } from '../buildings.service';
import { BuildingModel } from '../model/index';
import { BuildingComponent } from '../building';

@Component({
  moduleId: module.id,
  selector: 'app-buildings',
  templateUrl: 'buildings.component.html',
  styleUrls: ['buildings.component.css'],
  directives: [BuildingComponent]
})
export class BuildingsComponent implements OnInit {
  buildings: BuildingModel[];
  error: any;

  constructor(private buildingsService: BuildingsService) { }

  ngOnInit() {
    this.buildingsService.getModels()
      .then(buildings => this.buildings = buildings)
      .catch(error => this.error = error);
  }

}
