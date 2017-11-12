import { Component, OnInit, Input } from '@angular/core';
import { Building, BuildingModel } from '../../models';
import { BuildingsService } from '../../services';

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

    constructor(private buildingsService: BuildingsService) { }

    ngOnInit() {
        this.model = this.buildingsService.getModel(this.building.model);
        this.label = this.building.name || this.model.name;
    }


}
