import { Component, OnInit, Input } from '@angular/core';
import { BuildingModel } from '../model/index';
import { TranslationService } from '../translation.service';

@Component({
  moduleId: module.id,
  selector: 'building',
  templateUrl: 'building.component.html',
  styleUrls: ['building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input()
  building: BuildingModel;
  label: string;

  constructor(private translationSerivce: TranslationService) { }

  ngOnInit() {
    this.translationSerivce.getMessage(this.building.name)
      .then(label => this.label = label)
  }

}
