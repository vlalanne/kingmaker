import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SPREADSHEET_ID, API_KEY } from './google.config';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class SheetsApiService {

    constructor(private http: Http) {
    }

    getSheets(): Observable<string[]> {
        return this.http.get(`https://content-sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?key=${API_KEY}`)
            .map(response => response.json())
            .map(response => response.sheets as any[])
            .map(sheets => sheets.map(sheet => sheet.properties.title) as string[]);
    }

    getValues(sheet: string, start: string, end: string): Observable<string[][]> {
        return this.http.get(
            `https://content-sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheet}!${start}%3A${end}?key=${API_KEY}`)
            .map(response => response.json())
            .map(response => response.values as string[][]);
    }
}
