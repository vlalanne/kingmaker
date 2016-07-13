import { provideRouter, RouterConfig } from '@angular/router';
import { CitiesComponent } from './cities';

const routes: RouterConfig = [
   { path: 'cities', component: CitiesComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];