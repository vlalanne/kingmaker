import { provideRouter, RouterConfig } from '@angular/router';
import { CitiesComponent } from './cities';
import { BuildingsComponent } from './buildings';

const routes: RouterConfig = [
   { path: 'cities', component: CitiesComponent},
   { path: 'cities/:selected', component: CitiesComponent},
   { path: 'buildings', component: BuildingsComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];