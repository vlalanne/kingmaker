import { Component, OnInit, Input } from '@angular/core';
import { BuildingModel } from '../../models';
import { TranslationService } from '../../services';

@Component({
  selector: 'app-building-detail',
  templateUrl: 'building-detail.component.html',
  styleUrls: ['building-detail.component.scss']
})
export class BuildingDetailComponent implements OnInit {
  @Input()
  building: BuildingModel;
  @Input()
  label: string;
  economy: string;
  loyalty: string;
  stability: string;
  defence: string;
  value: string;
  price: string;
  magicObjects: string;
  minor: string;
  medium: string;
  major: string;

  constructor(private translationSerivce: TranslationService) { }

  ngOnInit() {
    this.translationSerivce.getMessage('economy')
      .then(label => this.economy = label);
    this.translationSerivce.getMessage('loyalty')
      .then(label => this.loyalty = label);
    this.translationSerivce.getMessage('stability')
      .then(label => this.stability = label);
    this.translationSerivce.getMessage('defence')
      .then(label => this.defence = label);
    this.translationSerivce.getMessage('value')
      .then(label => this.value = label);
    this.translationSerivce.getMessage('price')
      .then(label => this.price = label);
    this.translationSerivce.getMessage('magicObjects')
      .then(label => this.magicObjects = label);
    this.translationSerivce.getMessage('minor')
      .then(label => this.minor = label);
    this.translationSerivce.getMessage('medium')
      .then(label => this.medium = label);
    this.translationSerivce.getMessage('major')
      .then(label => this.major = label);
  }

}
