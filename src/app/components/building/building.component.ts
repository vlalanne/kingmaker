import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Building, BuildingModel } from '../../models';
import { BuildingsService, TranslationService } from '../../services';

@Component({
    selector: 'app-building',
    templateUrl: 'building.component.html',
    styleUrls: ['building.component.scss']
})
export class BuildingComponent implements OnInit {

    @Input()
    building: Building;
    model: BuildingModel;
    label: string;

    constructor(private buildingsService: BuildingsService, private translationService: TranslationService) { }

    ngOnInit() {
        this.model = this.buildingsService.getModel(this.building.model);
        this.label = this.building.name || this.model.name;
    }


}
