import { provideRouter, RouterConfig } from '@angular/router';
import { BuildingsComponent } from './buildings';
import { CitiesComponent } from './cities';
import { MapComponent } from './map';

const routes: RouterConfig = [
   { path: 'buildings', component: BuildingsComponent},
   { path: 'cities', component: CitiesComponent},
   { path: 'cities/:selected', component: CitiesComponent},
   { path: 'map', component: MapComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];