import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { KingdomsService, TranslationService } from '../../services';
import { KingdomRenderer } from './kingdom.renderer';
import { WIDTH, HEIGHT, HEX_WIDTH, HEX_HEIGHT, EVEN_X_OFFSET, ODD_X_OFFSET, Y_OFFSET } from './map.constants';


@Component({
    selector: 'app-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.scss']
})
export class MapComponent implements AfterViewInit {

    constructor(private kingdomsService: KingdomsService,
        private router: Router,
        private translationService: TranslationService,
        private host: ElementRef) { }
    ngAfterViewInit() {
        const map = L.map(this.host.nativeElement, {
            minZoom: 18,
            maxZoom: 20,
            crs: L.CRS.Simple
        }).setView([0, 0], 18);
        const southWest = map.unproject([0, HEIGHT], map.getMaxZoom());
        const northEast = map.unproject([WIDTH, 0], map.getMaxZoom());
        const bounds = new L.LatLngBounds(southWest, northEast);
        map.setMaxBounds(bounds);
        L.tileLayer('assets/img/map/{z}/{x}_{y}.png', {
            format: 'image/png',
            minZoom: 18,
            maxZoom: 20,
            bounds: bounds
        }).addTo(map);

        for (let x = 0; x < WIDTH / HEX_WIDTH; x++) {
            for (let y = 0; y < (HEIGHT - Y_OFFSET) / HEX_HEIGHT; y++) {
                const even = y % 2 === 0;
                const latLong = map.unproject([x * HEX_WIDTH + (even ? EVEN_X_OFFSET : ODD_X_OFFSET) - 5,
                y * HEX_HEIGHT + Y_OFFSET + 30], map.getMaxZoom());
                const numberIcon = L.divIcon({ html: x + ' : ' + y, className: 'number-icon map-icon', iconSize: L.point(30, 10) });
                L.marker(latLong, { icon: numberIcon }).addTo(map);
            }
        }

        this.kingdomsService
            .getKingdoms()
            .subscribe(x => new KingdomRenderer(this.router, map, this.translationService).paintKingdoms(x));

    }

}
