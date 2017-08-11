import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: []
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
