import { Component, OnInit } from '@angular/core';
import { BuildingsService } from '../buildings.service';
import { TranslationService } from '../translation.service';
import { SortBuildingsPipe } from '../sort-buildings.pipe';
import { BuildingModel } from '../model/index';
import { BuildingIconComponent } from '../building-icon';

@Component({
  selector: 'app-buildings',
  templateUrl: 'buildings.component.html',
  styleUrls: ['buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  order: string;
  ascending = true;

  buildings: BuildingModel[];
  error: any;
  economy: string;
  loyalty: string;
  stability: string;
  defence: string;
  value: string;
  price: string;
  unrest: string;
  magicObjects: string;
  minor: string;
  medium: string;
  major: string;
  requiredHouses: string;
  halvedCostBuildings: string;
  upgradeTo: string;

  constructor(private buildingsService: BuildingsService, private translationService: TranslationService) { }

  ngOnInit() {
    this.buildingsService.getModels()
      .then(buildings => this.buildings = buildings)
      .catch(error => this.error = error);
    this.translationService.getMessage("economy")
      .then(label => this.economy = label)
    this.translationService.getMessage("loyalty")
      .then(label => this.loyalty = label)
    this.translationService.getMessage("stability")
      .then(label => this.stability = label)
    this.translationService.getMessage("defence")
      .then(label => this.defence = label)
    this.translationService.getMessage("value")
      .then(label => this.value = label)
    this.translationService.getMessage("price")
      .then(label => this.price = label)
    this.translationService.getMessage("unrest")
      .then(label => this.unrest = label)
    this.translationService.getMessage("magicObjects")
      .then(label => this.magicObjects = label)
    this.translationService.getMessage("minor")
      .then(label => this.minor = label)
    this.translationService.getMessage("medium")
      .then(label => this.medium = label)
    this.translationService.getMessage("major")
      .then(label => this.major = label)
    this.translationService.getMessage("requiredHouses")
      .then(label => this.requiredHouses = label)
    this.translationService.getMessage("halvedCostBuildings")
      .then(label => this.halvedCostBuildings = label)
    this.translationService.getMessage("upgradeTo")
      .then(label => this.upgradeTo = label)
  }

  sort(parameter: string) {
    if (this.order === parameter) {
      if (this.ascending) {
        this.ascending = false;
      } else {
        this.order = null
        this.ascending = true;
      }
    } else {
      this.order = parameter
      this.ascending = true;
    }

  }

}
