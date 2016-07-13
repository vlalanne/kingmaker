import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TranslationService {
  private language: string;
  private url: string;
  constructor(private http: Http) {
    this.language = (window.navigator.userLanguage || window.navigator.language).split("-")[0];
    if (this.language != 'fr' && this.language != 'en') {
      this.language = 'en';
    }

    this.url = 'app/conf/translation/messages_' + this.language + '.json';  // URL to web api
  }

  getMessages() {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json())
      .catch(e => { });
  }

  getMessage(key: string): Promise<string> {
    return this.getMessages()
      .then(messages => messages.hasOwnProperty(key) ? messages[key] : key);

  }

}
