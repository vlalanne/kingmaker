import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/combineLatest';

import { Hex, Kingdom } from '../models';
import { SheetsApiService } from './sheets-api.service';
import { KingdomsService } from './kingdoms.service';

@Injectable()
export class KingdomsSheetService extends KingdomsService {


    constructor(private sheets: SheetsApiService) {
        super(null);
    }

    getKingdoms(): Observable<Kingdom[]> {
        return Observable.combineLatest(this.sheets.getValues('Royaume', 'B3', 'N114'),
            this.sheets.getValues('Royaumes Voisins', 'A2', 'E')
        )
            .map(values => {
                const kingdoms = {};
                kingdoms[values[0][0][0]] = values[0].splice(1, 114).map(x => x.splice(9, 12));
                values[1].reduce((map, value) => {
                    const array = map[value[0]] || [];
                    array.push(value.slice(1, 5));
                    map[value[0]] = array;
                    return map;
                }, kingdoms);
                return Object.keys(kingdoms).map(key => {
                    return {
                        name: key,
                        hexs: kingdoms[key]
                    };
                })
                    .map(kingdom => {
                        return {
                            name: kingdom.name,
                            hexs: kingdom.hexs.filter(value => !!value[0]).map(value => this.toHex(value))
                        } as Kingdom;
                    });
            })
            .catch(this.handleError);
    }


    private toHex(value: string[]): Hex {
        const coordinates = value[0].split(';');
        const isCity = value[2] && value[2].toLocaleLowerCase() === 'ville';
        return {
            x: parseInt(coordinates[0], 10),
            y: parseInt(coordinates[1], 10),
            city: isCity && value[1],
            pointOfInterest: !isCity && value[1] !== '-' && value[1].toLocaleLowerCase() !== 'forêt' && value[1],
            guardTower: value[2] && value[2].toLocaleLowerCase() === 'tour de guet',
            roads: !!value[3],
            resource: this.toResource(value[2])
        } as Hex;

    }

    private toResource(value: string): string {
        if (value) {
            switch (value.toLocaleLowerCase().trim()) {
                case 'argent':
                case 'mine':
                case 'or':
                    return 'mine';
                case 'bûcheron':
                    return 'lumberjack';
                case 'ferme':
                    return 'farm';
                case 'monastère':
                    return 'monastery';
                case 'pêcherie':
                    return 'fishery';
                default:
                    return undefined;

            }
        } else {
            return undefined;
        }
    }
}



