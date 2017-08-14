import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Border, Building, City, District } from '../models';
import { SheetsApiService } from './sheets-api.service';
import { CitiesService } from './cities.service';
import * as translation from 'assets/conf/translation/messages_fr.json';

const SHRINE_REGEX = /sanctuaire d[e'] ?(.+)/;
const TEMPLE_REGEX = /temple d[e'] ?(.+)/;
const CATHEDRAL_REGEX = /cathédrale d[e'] ?(.+)/;

@Injectable()
export class CitiesSheetsService extends CitiesService {

    constructor(private sheets: SheetsApiService) {
        super(null);
    }

    getCities(): Observable<string[]> {
        return this.sheets.getSheets()
            .map(sheets => sheets.filter(x => !x.toLowerCase().includes('royaume') && !x.toLowerCase().includes('journal')));
    }

    getCity(id: string): Observable<City> {
        return this.sheets.getValues(id, '1', '59')
            .map(x => this.toCity(x));
    }

    private toCity(values: string[][]): City {
        const districtNumber = parseInt(values[7][1], 10);
        const districts = Array.from(Array(districtNumber), (x, i) => i)
            .map(i => values.map(x => x.slice(12 + i * 12, 22 + i * 12)))
            .map(x => this.toDistrict(x));
        return {
            name: values[2][1],
            districts: this.toTwoDimensions(districts)
        } as City;

    }

    private toTwoDimensions(districts: District[]): District[][] {
        const coordinates: { [name: string]: number[] } = {};
        coordinates[districts[0].name] = [0, 0];
        for (let i = 1; i < districts.length; i++) {
            const district = districts[i];
            if (district.north.type === 'DISTRICT') {
                coordinates[district.name] = [coordinates[district.north.name][0], coordinates[district.north.name][1] + 1];
            } else if (district.east.type === 'DISTRICT') {
                coordinates[district.name] = [coordinates[district.east.name][0] - 1, coordinates[district.east.name][1]];
            } else if (district.south.type === 'DISTRICT') {
                coordinates[district.name] = [coordinates[district.south.name][0], coordinates[district.south.name][1] - 1];
            } else {
                coordinates[district.name] = [coordinates[district.west.name][0] + 1, coordinates[district.west.name][1]];
            }
        }
        const minX = Object.values(coordinates).map(x => x[0]).reduce((current, next) => Math.min(current, next), Number.MAX_VALUE);
        const minY = Object.values(coordinates).map(x => x[1]).reduce((current, next) => Math.min(current, next), Number.MAX_VALUE);
        Object.values(coordinates).forEach(x => {
            x[0] = x[0] - minX;
            x[1] = x[1] - minY;
        });
        const twoDimensionDistricts = [];
        districts.forEach(district => {
            const districtCoordinates = coordinates[district.name];
            twoDimensionDistricts[districtCoordinates[1]] = twoDimensionDistricts[districtCoordinates[1]] || [];
            twoDimensionDistricts[districtCoordinates[1]][districtCoordinates[0]] = district;
        });
        return districts.reduce((result, district) => {
            const districtCoordinates = coordinates[district.name];
            result[districtCoordinates[1]] = result[districtCoordinates[1]] || [];
            result[districtCoordinates[1]][districtCoordinates[0]] = district;
            return result;
        }, []);
    }

    private toDistrict(values: string[][]): District {
        return {
            name: values[2][1],
            buildings: values.slice(21, 56).filter(x => !!x[0]).map(x => this.toBuilding(x)),
            north: this.toBorder(values[5][1]),
            east: this.toBorder(values[6][1]),
            south: this.toBorder(values[7][1]),
            west: this.toBorder(values[8][1])
        } as District;
    }
    private toBorder(value: string): Border {
        if (value && value.toLowerCase().includes('quartier')) {
            return {
                type: 'DISTRICT',
                name: value.replace(/quartier (?:de |de la |du |d')?(.+)/i, '$1')
            } as Border;
        } else if (value && value.toLowerCase().includes('pont')) {
            return {
                type: 'BRIDGE',
                name: value.replace(/pont sur (?:le |la |l' |les)?(.+)/i, '$1')
            } as Border;
        } else if (value && (value.toLowerCase().includes('rivière')
            || value.toLowerCase().includes('lac'))) {
            return {
                type: 'WATER',
                name: value
            } as Border;
        } else {
            return {
                type: 'GRASS'
            } as Border;
        }

    }
    private toBuilding(values: string[]): Building {
        const modelAndName = this.getModelAndName(values[0]);
        const coordinates = this.getCoordinates(values[9]);
        return {
            x: coordinates[0],
            y: coordinates[1],
            vertical: coordinates[2], model: modelAndName[0],
            name: modelAndName[1]
        } as Building;

    }

    private getCoordinates(value: string): (number | boolean)[] {
        if (value.includes(';')) {
            return value.split(';').map((x, i) => {
                if (i < 2) {
                    return parseInt(x, 10);
                } else {
                    return !!x;
                }
            });
        } else {
            return [];
        }
    }

    private getModelAndName(value: string): string[] {
        const lowercase = value.toLowerCase();
        if (lowercase === 'château') {
            return ['castle'];
        } else if (lowercase === 'académie avec tour de mage') {
            return ['academy-tower'];
        } else if (lowercase.includes('académie')) {
            return ['academy', this.getName(value, 'académie')];
        } else if (lowercase === 'ecurie') {
            return ['stable'];
        } else if (lowercase.includes('maison')) {
            return ['house'];
        } else if (lowercase.includes('taverne')) {
            return ['tavern', this.getName(value, 'taverne')];
        } else if (lowercase === 'grenier') {
            return ['granary'];
        } else if (lowercase === 'garnison') {
            return ['garrison'];
        } else if (lowercase === 'tour de mages') {
            return ['caster-tower'];
        } else if (lowercase === 'muraille') {
            return ['city-wall'];
        } else if (lowercase.match(SHRINE_REGEX)) {
            return [lowercase.replace(SHRINE_REGEX, (match, p1) => `shrine-${p1.replace(' ', '-')}`)];
        } else if (lowercase.match(TEMPLE_REGEX)) {
            return [lowercase.replace(TEMPLE_REGEX, (match, p1) => `temple-${p1.replace(' ', '-')}`)];
        } else if (lowercase.match(CATHEDRAL_REGEX)) {
            return [lowercase.replace(CATHEDRAL_REGEX, (match, p1) => `cathedral-${p1.replace(' ', '-')}`)];
        } else if (lowercase.includes('echope de magie')) {
            return ['magic-shop', this.getName(value, 'echope de magie')];
        } else if (lowercase.includes('auberge')) {
            return ['inn', this.getName(value, 'auberge')];
        } else if (lowercase === 'ecole' || value === 'bibliothèque') {
            return ['library', this.getName(value, 'bibliothèque')];
        } else if (lowercase === 'echoppe') {
            return ['shop'];
        } else if (lowercase === 'moulin') {
            return ['mill'];
        } else if (lowercase === 'scierie') {
            return ['sawmill'];
        } else if (lowercase === 'baraquement') {
            return ['barracks'];
        } else if (lowercase === 'villa noble') {
            return ['noble-villa'];
        } else if (lowercase === 'cimetière') {
            return ['graveyard'];
        } else if (lowercase === 'brasserie') {
            return ['brewery'];
        } else if (lowercase === 'forge' || lowercase === 'maréchal ferrant') {
            return ['smith', this.getName(value, 'forge')];
        } else if (lowercase === 'tisserand') {
            return ['weaver'];
        } else if (lowercase === 'hôtel de ville') {
            return ['town-hall'];
        } else if (lowercase.includes('statue') || lowercase === 'monument') {
            return ['monument', this.getName(value, 'monument')];
        } else if (lowercase.includes('artisan exotique')) {
            return ['exotic-craftsman', this.getName(value, 'artisan exotique')];
        } else if (lowercase.includes('quai')) {
            return ['pier'];
        } else if (lowercase.includes('parc')) {
            return ['park', this.getName(value, 'parc')];
        } else if (lowercase.includes('ambassade')) {
            return ['embassy', this.getName(value, 'ambassade')];
        } else if (lowercase.includes('décharge')) {
            return ['dump'];
        } else if (lowercase.includes('prison')) {
            return ['jail'];
        } else if (lowercase.includes('marché')) {
            return ['market'];
        } else if (lowercase.includes('herboriste')) {
            return ['herbalist'];
        } else if (lowercase.includes('front de mer')) {
            return ['waterfront'];
        } else if (lowercase.includes('tannerie')) {
            return ['tannery'];
        } else if (lowercase.includes('bordel')) {
            return ['brothel'];
        } else if (lowercase.includes('tour de garde')) {
            return ['watchtower'];
        } else {
            throw new Error(`unknown building: ${value}`);
        }
    }

    private getName(value: string, defaultName: string): string {
        return value.toLowerCase() === defaultName.toLowerCase() ? undefined : value.replace(/.*"(.*)".*/, '$1');
    }
}
