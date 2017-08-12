import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent, CitiesComponent, MapComponent } from './components';
const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'buildings', component: BuildingsComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/:selected', component: CitiesComponent },
  { path: 'map', component: MapComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
