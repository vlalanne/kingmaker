import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    model$: Observable<BuildingModel>;
    label: string;


    constructor(private translationService: TranslationService, private buildingsService: BuildingsService) { }

    ngOnInit() {
        this.model$ = this.buildingsService
            .getModel(this.id);
        this.label = this.translationService.getMessage(this.id);
    }

}
