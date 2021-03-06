import { Pipe, PipeTransform } from '@angular/core';
import { BuildingModel } from '../models';

@Pipe({
  name: 'sortBuildings'
})
export class SortBuildingsPipe implements PipeTransform {

  transform(buildings: BuildingModel[], parameter: string, ascending: boolean): BuildingModel[] {
    if (parameter) {
      return buildings.sort((a, b) => {
        let comparison;
        if (typeof a[parameter] === 'string') {
          comparison = a[parameter].localeCompare(b[parameter]);
        } else {
          comparison = a[parameter] >= b[parameter] ? 1 : -1;
        }
        return comparison * (ascending ? 1 : -1);
      });
    } else {
      return buildings;
    }
  }

}
