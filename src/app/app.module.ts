import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
    AppComponent,
    BuildingComponent,
    BuildingDetailComponent,
    BuildingIconComponent,
    BuildingsComponent,
    CitiesComponent,
    CityComponent,
    DistrictComponent,
    MapComponent,
    RegionComponent
} from './components';
import { SortBuildingsPipe } from './pipes';
import {
    BuildingsService,
    CitiesSheetsService,
    CitiesService,
    KingdomsSheetService,
    KingdomsService,
    SheetsApiService,
    TranslationService
} from './services';
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
        BuildingComponent,
        RegionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [
        { provide: CitiesService, useClass: CitiesSheetsService },
        BuildingsService,
        { provide: KingdomsService, useClass: KingdomsSheetService },
        SheetsApiService,
        TranslationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
