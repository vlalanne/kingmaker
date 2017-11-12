import { Component, Input } from '@angular/core';
import { District, Building, BuildingSize } from '../../models';
import { BuildingsService } from '../../services';


@Component({
    selector: 'app-district',
    templateUrl: 'district.component.html',
    styleUrls: ['district.component.scss']
})
export class DistrictComponent {
    @Input()
    district: District;

    constructor(private buildingsService: BuildingsService) { }
    hasWall() {
        return this.district.buildings
            .some(building => building.model === 'city-wall');
    }



    getStyle(building: Building): any {
        const model = this.buildingsService.getModel(building.model);
        const columnStart = this.toGridStart(building.x);
        const columnEnd = this.toGridEnd(columnStart, model.size, !building.vertical);
        const rowStart = this.toGridStart(building.y);
        const rowEnd = this.toGridEnd(rowStart, model.size, building.vertical);
        return {
            'grid-column-start': columnStart,
            'grid-column-end': columnEnd,
            'grid-row-start': rowStart,
            'grid-row-end': rowEnd
        };
    }

    private toGridStart(position: number): number {
        return position + 1 + (position >= 2 ? 1 : 0) + (position >= 4 ? 1 : 0);
    }
    private toGridEnd(start: number, size: BuildingSize, aligned: boolean): number {
        return Math.min(start + (size === 'LARGE' || size === 'MEDIUM' && aligned ? 2 : 1),
            start <= 2 ? 3 : start <= 5 ? 6 : 9);
    }
}
