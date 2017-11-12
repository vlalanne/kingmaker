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

  constructor(private service: TranslationService) { }

  ngOnInit() {
    this.economy =  this.service.getMessage('economy');
    this.loyalty =  this.service.getMessage('loyalty');
    this.stability =  this.service.getMessage('stability');
    this.defence =  this.service.getMessage('defence');
    this.value =  this.service.getMessage('value');
    this.price =  this.service.getMessage('price');
    this.magicObjects =  this.service.getMessage('magicObjects');
    this.minor =  this.service.getMessage('minor');
    this.medium =  this.service.getMessage('medium');
    this.major =  this.service.getMessage('major');
  }

}
