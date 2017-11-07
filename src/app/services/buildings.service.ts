import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { BuildingModel } from '../models';
import { BUILDINGS } from '../conf/buildings';
import { TranslationService } from './translation.service';

@Injectable()
export class BuildingsService {

    constructor(private translationService: TranslationService) { }


    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
    getModel(id: string): Observable<BuildingModel> {
        return this.getModels()
            .map(models => models.find(model => model.id === id));

    }

    getModels(): Observable<BuildingModel[]> {
        return Observable.of(BUILDINGS)
            .map(buildings => {
                buildings.forEach(building => building.name = this.translationService.getMessage(building.name));
                return buildings;
            })
            .catch(this.handleError);
    }
}
