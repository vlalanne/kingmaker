import { Component } from '@angular/core';
import { TranslationService } from '../../services';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    providers: []
})
export class AppComponent {
    buildingsLabel: string;
    citiesLabel: string;
    mapLabel: string;
    regionLabel: string;

    constructor(translationService: TranslationService) {
        this.buildingsLabel = translationService.getMessage('buildings');
        this.citiesLabel = translationService.getMessage('cities');
        this.mapLabel = translationService.getMessage('map');
        this.regionLabel = translationService.getMessage('region');
    }
}
