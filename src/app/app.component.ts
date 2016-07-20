import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BuildingsService } from './buildings.service';
import { CitiesService } from './cities.service';
import { KingdomsService } from './kingdoms.service';
import { TranslationService } from './translation.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CitiesService, BuildingsService, KingdomsService, TranslationService]
})
export class AppComponent {
  buildingsLabel: string;
  citiesLabel: string;
  mapLabel: string;
  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.getMessage('buildings')
      .then(label => this.buildingsLabel = label)
    this.translationService.getMessage('cities')
      .then(label => this.citiesLabel = label)
    this.translationService.getMessage('map')
      .then(label => this.mapLabel = label)
  }
}
