import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  AppComponent,
  BlockComponent,
  BuildingDetailComponent,
  BuildingIconComponent,
  BuildingsComponent,
  CitiesComponent,
  CityComponent,
  DistrictComponent,
  MapComponent
} from './components';
import { SortBuildingsPipe } from './pipes';
import { BuildingsService, CitiesService, KingdomsService, TranslationService } from './services';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BuildingsComponent,
    CitiesComponent,
    CityComponent,
    BuildingDetailComponent,
    BuildingIconComponent,
    SortBuildingsPipe,
    DistrictComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CitiesService,
    BuildingsService,
    KingdomsService,
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
