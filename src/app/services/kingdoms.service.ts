import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Kingdom } from '../models';

@Injectable()
export class KingdomsService {

  private url = 'data/kingdoms.json';
  constructor(private http: Http) { }
  getKingdoms(): Observable<Kingdom[]> {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  protected handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}



