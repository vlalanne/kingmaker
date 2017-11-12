import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent, CitiesComponent, CityComponent, MapComponent, RegionComponent } from './components';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/map', pathMatch: 'full'
  },
  {
    path: 'buildings',
    component: BuildingsComponent
  },
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: ':selected',
        component: CityComponent
      }
    ]
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'region',
    component: RegionComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
