import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TranslationService {
  private messages;
  private language: string;
  private url: string;
  constructor(private http: Http) {
    this.language = window.navigator.language.split('-')[0];
    if (this.language !== 'fr' && this.language !== 'en') {
      this.language = 'en';
    }

    this.url = `assets/conf/translation/messages_${this.language}.json`;  // URL to web api
  }

  getMessages() {
    if (this.messages == null) {
      return this.http.get(this.url)
        .toPromise()
        .then(response => {
          this.messages = response.json();
          return this.messages;
        });
    } else {
      return Promise.resolve(this.messages);
    }
  }

  getMessage(key: string): Promise<string> {
    return this.getMessages()
      .then(messages => messages.hasOwnProperty(key) ? messages[key] : key);

  }

}
