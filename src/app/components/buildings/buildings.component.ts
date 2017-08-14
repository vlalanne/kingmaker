import { Component, OnInit } from '@angular/core';
import { BuildingsService, TranslationService } from '../../services';
import { BuildingModel } from '../../models';

@Component({
    selector: 'app-buildings',
    templateUrl: 'buildings.component.html',
    styleUrls: ['buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

    order: string;
    ascending = true;

    buildings: BuildingModel[];
    error: any;
    economy: string;
    loyalty: string;
    stability: string;
    defence: string;
    value: string;
    price: string;
    unrest: string;
    magicObjects: string;
    minor: string;
    medium: string;
    major: string;
    requiredHouses: string;
    halvedCostBuildings: string;
    upgradeTo: string;

    constructor(private buildingsService: BuildingsService, private translationService: TranslationService) { }

    ngOnInit() {
        this.buildingsService.getModels()
            .then(buildings => this.buildings = buildings)
            .catch(error => this.error = error);
        this.economy = this.translationService.getMessage('economy');
        this.loyalty = this.translationService.getMessage('loyalty');
        this.stability = this.translationService.getMessage('stability');
        this.defence = this.translationService.getMessage('defence');
        this.value = this.translationService.getMessage('value');
        this.price = this.translationService.getMessage('price');
        this.magicObjects = this.translationService.getMessage('magicObjects');
        this.minor = this.translationService.getMessage('minor');
        this.medium = this.translationService.getMessage('medium');
        this.major = this.translationService.getMessage('major');
        this.unrest = this.translationService.getMessage('unrest');
        this.requiredHouses = this.translationService.getMessage('requiredHouses');
        this.halvedCostBuildings = this.translationService.getMessage('halvedCostBuildings');
        this.upgradeTo = this.translationService.getMessage('upgradeTo');
    }

    sort(parameter: string) {
        if (this.order === parameter) {
            if (this.ascending) {
                this.ascending = false;
            } else {
                this.order = null;
                this.ascending = true;
            }
        } else {
            this.order = parameter;
            this.ascending = true;
        }

    }

}
