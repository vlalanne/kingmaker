import { Component, OnInit, Input } from '@angular/core';
import { TranslationService } from '../translation.service'
import { BuildingsService } from '../buildings.service'
import { BuildingModel } from '../model'

@Component({
  moduleId: module.id,
  selector: 'building-icon',
  templateUrl: 'building-icon.component.html',
  styleUrls: ['building-icon.component.css']
})
export class BuildingIconComponent implements OnInit {
  @Input()
  id: string;
  model: BuildingModel;
  label: string;


  constructor(private translationService: TranslationService, private buildingsService: BuildingsService) { }

  ngOnInit() {
    this.buildingsService
      .getModel(this.id)
      .then(model => this.model=model)
    this.translationService
      .getMessage(this.id)
      .then(label => this.label=label)
  }

}
