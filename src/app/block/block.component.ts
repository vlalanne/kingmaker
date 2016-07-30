import { Component, OnInit, Input } from '@angular/core';
import { Building, BuildingModel } from '../model/index';
import { BuildingsService } from '../buildings.service';
import { TranslationService } from '../translation.service';
import { BuildingDetailComponent } from '../building-detail'

@Component({
  moduleId: module.id,
  selector: 'city-block',
  templateUrl: 'block.component.html',
  styleUrls: ['block.component.css'],
  directives: [BuildingDetailComponent]
})
export class BlockComponent implements OnInit {

  noBuildingLabel: string;

  @Input()
  topLeft: Building;
  topLeftModel: BuildingModel;
  topLeftLabel: string;
  @Input()
  topRight: Building;
  topRightModel: BuildingModel;
  topRightLabel: string;
  @Input()
  bottomLeft: Building;
  bottomLeftModel: BuildingModel;
  bottomLeftLabel: string;
  @Input()
  bottomRight: Building;
  bottomRightModel: BuildingModel;
  bottomRightLabel: string;

  constructor(private buildingsService: BuildingsService, private translationService: TranslationService) { }

  ngOnInit() {
    this.getData('topLeft');
    this.getData('topRight');
    this.getData('bottomLeft');
    this.getData('bottomRight');
    this.translationService
      .getMessage("no-building")
      .then(label => this.noBuildingLabel = label);
  }

  getData(property: string) {
    if (this[property]) {
      this.buildingsService
        .getModel(this[property].model)
        .then(model => {
          this[property + 'Model'] = model;
          if (this[property].name) {
            this[property + 'Label'] = this[property].name;
          } else {
            this[property + 'Label'] = model.name;
          }
        }
        )
    }
  }

  canDrawTopRight() {
    return !this.topLeftModel || !(this.topLeftModel.size == 'MEDIUM' && !this.topLeft.vertical);
  }

  canDrawBottomLeft() {
    return !this.topLeftModel || !(this.topLeftModel.size == 'MEDIUM' && this.topLeft.vertical);
  }

  canDrawBottomRight() {
    return (!this.topRightModel || this.topRightModel.size != 'MEDIUM')
      && (!this.bottomLeftModel || this.bottomLeftModel.size != 'MEDIUM');
  }

}
