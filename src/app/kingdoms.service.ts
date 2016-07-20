import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Kingdom } from './model';

@Injectable()
export class KingdomsService {

  private url = 'data/kingdoms.json';
  constructor(private http: Http) { }
  getKingdoms(): Promise<Kingdom[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}



