import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  buildingsLabel: string;
  citiesLabel: string;
  mapLabel: string;
  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.buildingsLabel =  this.translationService.getMessage('buildings');
    this.citiesLabel =  this.translationService.getMessage('cities');
    this.mapLabel =  this.translationService.getMessage('map');
  }
}
