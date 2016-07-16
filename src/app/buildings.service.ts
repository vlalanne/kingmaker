import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BuildingModel } from './model';
import { BUILDINGS } from './conf/buildings';

@Injectable()
export class BuildingsService {

  private url = 'app/conf/buildings.json';  // URL to web api
  constructor(private http: Http) { }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getModel(id: string): Promise<BuildingModel> {
    return this.getModels()
      .then(models => models.find(model => model.id === id));

  }

  getModels(): Promise<BuildingModel[]> {
    return Promise.resolve(BUILDINGS)
      .catch(this.handleError);
  }
}
