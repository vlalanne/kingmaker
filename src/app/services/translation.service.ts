import { Injectable } from '@angular/core';
import * as fr from '../conf/translation/messages_fr.json';
import * as en from '../conf/translation/messages_en.json';

@Injectable()
export class TranslationService {
    messages;
    constructor() {
        const language = window.navigator.language.split('-')[0];
        if (language === 'fr') {
            this.messages = fr;
        } else {
            this.messages = en;
        }

    }

    getMessage(key: string): string {
        return this.messages.hasOwnProperty(key) ? this.messages[key] : key;
    }

}
