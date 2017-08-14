import { Component, OnInit, Input } from '@angular/core';
import { BuildingsService, TranslationService } from '../../services';
import { BuildingModel } from '../../models';

@Component({
    selector: 'app-building-icon',
    templateUrl: 'building-icon.component.html',
    styleUrls: ['building-icon.component.scss']
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
            .then(model => this.model = model);
        this.label = this.translationService.getMessage('this.id');
    }

}
