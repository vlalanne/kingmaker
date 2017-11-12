import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/combineLatest';

import { Hex, Kingdom, PointOfInterest, PointOfInterestType } from '../models';
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
        const isCity = value[2] && value[2].toLowerCase() === 'ville';
        const text = value[1];
        const pointOfInterest: PointOfInterest = isCity || text.length === 0 || text === '-' || text.toLowerCase() === 'forêt' ? undefined :
            { name: text, type: this.toPointOfInterestType(text) };
        return {
            x: parseInt(coordinates[0], 10),
            y: parseInt(coordinates[1], 10),
            city: isCity && text,
            pointOfInterest,
            guardTower: value[2] && value[2].toLowerCase() === 'tour de guet',
            roads: !!value[3],
            resource: this.toResource(value[2])
        } as Hex;

    }



    private toPointOfInterestType(name: string): PointOfInterestType {
        const lowerCase = name.toLowerCase();
        if (lowerCase.includes('statue')) {
            return 'statue';
        } else if (lowerCase.includes('grotte')
            || lowerCase.includes('tertre')) {
            return 'cave';
        } else if (lowerCase.includes('pierre')
            || lowerCase.includes('tomb')) {
            return 'obelisk';
        } else if (lowerCase.includes('festival')) {
            return 'tent';
        } else if (lowerCase.includes('chuuls')
            || lowerCase.includes('homme')
            || lowerCase.includes('loup')) {
            return 'animal';
        } else if (lowerCase.includes('fée')
            || lowerCase.includes('vallée')) {
            return 'magic';
        } else if (lowerCase.includes('bac')) {
            return 'bridge';
        } else {
            return 'ruins';
        }
    }

    private toResource(value: string): string {
        if (value) {
            switch (value.toLowerCase().trim()) {
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



