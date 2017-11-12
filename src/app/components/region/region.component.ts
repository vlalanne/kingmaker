import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { KingdomsService } from '../../services';
import { Hex } from '../../models';
import { ODD_X_OFFSET, EVEN_X_OFFSET, HEX_WIDTH, HEX_HEIGHT, Y_OFFSET, WIDTH } from '../map/map.constants';

const MAP_TOP_LEFT_X = 1405;
const MAP_TOP_LEFT_Y = 923;
const MAP_TOP_RIGHT_X = 2308;
const MAP_TOP_RIGHT_Y = 1145;
const MAP_BOTTOM_LEFT_X = 1325;
const MAP_BOTTOM_LEFT_Y = 1199;
const MAP_BOTTOM_RIGHT_X = 2229;
const MAP_BOTTOM_RIGHT_Y = 1418;
const ANGLE = Math.atan(Math.abs(MAP_TOP_LEFT_Y - MAP_TOP_RIGHT_Y) / Math.abs(MAP_TOP_LEFT_X - MAP_TOP_RIGHT_X));
const COS = Math.cos(ANGLE);
const SIN = Math.sin(ANGLE);
const MAP_WIDTH = Math.sqrt(Math.pow(MAP_TOP_LEFT_Y - MAP_TOP_RIGHT_Y, 2) + Math.pow(MAP_TOP_LEFT_X - MAP_TOP_RIGHT_X, 2));
const SCALE = MAP_WIDTH / WIDTH;

@Component({
    selector: 'app-region',
    templateUrl: 'region.component.html',
    styleUrls: ['region.component.scss']
})
export class RegionComponent implements AfterViewInit {
    map: any;

    constructor(private kingdomsService: KingdomsService, private router: Router, private host: ElementRef) { }
    ngAfterViewInit() {
        this.map = L.map(this.host.nativeElement, {
            minZoom: 18,
            maxZoom: 20,
            crs: L.CRS.Simple
        }).setView([0, 0], 18);
        const southWest = this.map.unproject([0, 3072], this.map.getMaxZoom());
        const northEast = this.map.unproject([3072, 0], this.map.getMaxZoom());
        const bounds = new L.LatLngBounds(southWest, northEast);
        this.map.setMaxBounds(bounds);
        L.tileLayer('assets/img/region/{z}/{x}_{y}.png', {
            format: 'image/png',
            minZoom: 18,
            maxZoom: 20,
            bounds: bounds
        }).addTo(this.map);
        const points = [
            this.computePoint(MAP_TOP_LEFT_X, MAP_TOP_LEFT_Y),
            this.computePoint(MAP_BOTTOM_LEFT_X, MAP_BOTTOM_LEFT_Y),
            this.computePoint(MAP_BOTTOM_RIGHT_X, MAP_BOTTOM_RIGHT_Y),
            this.computePoint(MAP_TOP_RIGHT_X, MAP_TOP_RIGHT_Y)
        ];
        L.polygon(points, { color: 'transparent' })
            .on('click', _ => this.router.navigate(['/map']))
            .addTo(this.map);
        this.kingdomsService.getKingdoms()
            .map(kingdoms => kingdoms[0])
            .subscribe(kingdom => {
                kingdom.hexs.forEach(hex => this.paintHex(hex));
                this.paintKingdomName(kingdom.name);
                kingdom.hexs.filter(hex => !!hex.city)
                    .forEach(hex => this.paintCity(hex));
            });
    }
    computePoint(x: number, y: number) {
        return this.map.unproject([x, y],
            this.map.getMaxZoom());
    }
    paintKingdomName(name: string) {
        const city = L.divIcon({
            html: name,
            className: 'map-icon kingdom-text'
        });
        L.marker(this.map.unproject([(MAP_TOP_LEFT_X + MAP_BOTTOM_RIGHT_X) / 2, (MAP_TOP_LEFT_Y + MAP_BOTTOM_RIGHT_Y) / 2],
            this.map.getMaxZoom()), { icon: city })
            .addTo(this.map);

    }
    paintHex(hex: Hex) {
        const points = [
            this.computeHexPoint(hex, - 1 / 2, 1 / 3),
            this.computeHexPoint(hex, - 1 / 2, 1),
            this.computeHexPoint(hex, 0, 4 / 3),
            this.computeHexPoint(hex, 1 / 2, 1),
            this.computeHexPoint(hex, 1 / 2, 1 / 3),
            this.computeHexPoint(hex, 0, 0)
        ];
        L.polygon(points, { color: 'red', stroke: false, fillOpacity: .6, interactive: false })
            .addTo(this.map);
    }

    paintCity(hex: Hex) {
        const point = this.computeHexPoint(hex, 0, 2 / 3);
        L.circle(point,
            .00001,
            { color: 'white', stroke: false, fillOpacity: 1 })
            .on('click', _ => this.router.navigate(['/cities', hex.city]))
            .addTo(this.map);
        L.circle(point,
            .000006,
            { color: 'black', stroke: false, fillOpacity: 1 })
            .on('click', _ => this.router.navigate(['/cities', hex.city]))
            .addTo(this.map);

        const city = L.divIcon({
            html: hex.city,
            className: 'map-icon city-text'
        });
        L.marker(point, { icon: city })
            .on('click', _ => this.router.navigate(['/cities', hex.city]))
            .addTo(this.map);
    }

    computeHexPoint(hex: Hex, xOffset: number, yOffset: number) {
        const even = hex.y % 2 === 0;
        const offset = even ? EVEN_X_OFFSET : ODD_X_OFFSET;
        const local_x = ((hex.x + xOffset) * HEX_WIDTH + offset) * SCALE;
        const local_y = ((hex.y + yOffset) * HEX_HEIGHT + Y_OFFSET) * SCALE;
        const x = MAP_TOP_LEFT_X + local_x * COS - local_y * SIN;
        const y = MAP_TOP_LEFT_Y + local_x * SIN + local_y * COS;
        return this.map.unproject([x, y], this.map.getMaxZoom());
    }
}
