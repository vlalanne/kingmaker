import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { KingdomsService } from '../kingdoms.service';
import { Kingdom } from '../model/index';
import { KingdomRenderer } from './kingdom.renderer';
import { WIDTH, HEIGHT, HEX_WIDTH, HEX_HEIGHT, EVEN_X_OFFSET, ODD_X_OFFSET, Y_OFFSET } from './map.constants';
declare var L: any;


@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild("leaflet")
  private leaflet: ElementRef;

  constructor(private kingdomsService: KingdomsService, private router: Router) { }
  ngAfterViewInit() {
    let map = L.map(this.leaflet.nativeElement, {
      minZoom: 18,
      maxZoom: 20,
      crs: L.CRS.Simple
    }).setView([0, 0], 18);
    let southWest = map.unproject([0, HEIGHT], map.getMaxZoom());
    let northEast = map.unproject([WIDTH, 0], map.getMaxZoom());
    let bounds = new L.LatLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);
    L.tileLayer('app/img/map/{z}/{x}_{y}.png', {
      format: 'image/png',
      minZoom: 18,
      maxZoom: 20,
      bounds: bounds
    }).addTo(map);

    for (let x = 0; x < WIDTH / HEX_WIDTH; x++) {
      for (let y = 0; y < (HEIGHT - Y_OFFSET) / HEX_HEIGHT; y++) {
        let even = y % 2 === 0;
        let latLong = map.unproject([x * HEX_WIDTH + (even ? EVEN_X_OFFSET : ODD_X_OFFSET) - 5, y * HEX_HEIGHT + Y_OFFSET + 30], map.getMaxZoom());
        let numberIcon = L.divIcon({ html: x + ' : ' + y, className: 'number-icon map-icon', iconSize: L.point(30, 10) });
        L.marker(latLong, { icon: numberIcon }).addTo(map);
      }
    }

    this.kingdomsService
      .getKingdoms()
      .then(x => new KingdomRenderer(this.router, map).paintKingdoms(x));

  }

}
