import { Injectable } from '@angular/core';
import { BuildingModel } from '../models';
import { BUILDINGS } from '../conf/buildings';
import { TranslationService } from './translation.service';

@Injectable()
export class BuildingsService {

    constructor(translationService: TranslationService) {
        BUILDINGS.forEach(building => building.name = translationService.getMessage(building.name));
    }

    getModel(id: string): BuildingModel {
        return this.getModels().find(model => model.id === id);
    }

    getModels(): BuildingModel[] {
        return BUILDINGS;
    }
}
