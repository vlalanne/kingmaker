import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuildingsService } from './buildings.service';
import { CitiesService } from './cities.service';
import { KingdomsService } from './kingdoms.service';
import { TranslationService } from './translation.service';
import { AppRoutingModule }     from './app-routing.module';
import { SortBuildingsPipe }     from './sort-buildings.pipe';
import { MapComponent } from './map/map.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { BlockComponent } from './block/block.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingIconComponent } from './building-icon/building-icon.component';
import { DistrictComponent } from './district/district.component';

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
