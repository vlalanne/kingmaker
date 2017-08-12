import { Router } from '@angular/router';
import { Kingdom, Hex } from '../../models';
import { EVEN_X_OFFSET, ODD_X_OFFSET, HEX_WIDTH, HEX_HEIGHT, Y_OFFSET } from './map.constants';
declare var L: any;



export class KingdomRenderer {

  private roads: string[];

  constructor(private router: Router, private map) { }



  paintKingdoms(kingdoms: Kingdom[]) {
    this.roads = kingdoms.map(x => x.hexs)
      .reduce((acc, x) => acc.concat(x), [])
      .filter(x => x.roads)
      .map(x => x.x + ';' + x.y);
    for (let i = 0; i < kingdoms.length; i++) {
      this.paintKingdom(kingdoms[i]);
    }
  }

  paintKingdom(kingdom: Kingdom) {
    for (let j = 0; j < kingdom.hexs.length; j++) {
      this.paintHex(kingdom, kingdom.hexs[j]);
    }
  }

  paintHex(kingdom: Kingdom, hex: Hex) {
    if (kingdom.name) {
      this.paintOwnership(kingdom, hex);
    }
    if (hex.roads) {
      this.paintRoads(hex);
    }
    this.paintElements(hex);
  }

  paintOwnership(kingdom: Kingdom, hex: Hex) {
    const points = [
      this.computePoint(hex, - 1 / 2, 1 / 3),
      this.computePoint(hex, - 1 / 2, 1),
      this.computePoint(hex, 0, 4 / 3),
      this.computePoint(hex, 1 / 2, 1),
      this.computePoint(hex, 1 / 2, 1 / 3),
      this.computePoint(hex, 0, 0)
    ];
    L.polygon(points, { color: kingdom.color })
      .bindPopup('<h4>' + kingdom.name + '<h4>')
      .addTo(this.map);
  }

  paintRoads(hex: Hex) {
    const even = hex.y % 2 === 0;
    const offset = even ? 1 : 0;
    const center = this.computePoint(hex, 0, 2 / 3);
    if (this.hasRoads(hex, -1 + offset, -1)) {
      this.paintRoad(center, this.computePoint(hex, - 1 / 4, 1 / 6));
    }
    if (this.hasRoads(hex, 0 + offset, -1)) {
      this.paintRoad(center, this.computePoint(hex, 1 / 4, 1 / 6));
    }
    if (this.hasRoads(hex, -1, 0)) {
      this.paintRoad(center, this.computePoint(hex, - 1 / 2, 2 / 3));
    }
    if (this.hasRoads(hex, 1, 0)) {
      this.paintRoad(center, this.computePoint(hex, 1 / 2, 2 / 3));
    }
    if (this.hasRoads(hex, -1 + offset, 1)) {
      this.paintRoad(center, this.computePoint(hex, - 1 / 4, 7 / 6));
    }
    if (this.hasRoads(hex, 0 + offset, 1)) {
      this.paintRoad(center, this.computePoint(hex, 1 / 4, 7 / 6));
    }
  }
  hasRoads(hex: Hex, xOffset: number, yOffset: number): boolean {
    const pos = (hex.x + xOffset) + ';' + (hex.y + yOffset);
    return this.roads.indexOf(pos) >= 0;
  }
  paintRoad(start, end) {
    const nb = Math.floor(Math.random() * 5);
    const road = [start];
    for (let i = 0; i < nb; i++) {
      const lat = (start.lat + (end.lat - start.lat) / nb * i) * (1 + (Math.random() - 1) / 250);
      const lng = (start.lng + (end.lng - start.lng) / nb * i) * (1 + (Math.random() - 1) / 250);
      road.push(L.latLng(lat, lng));
    }
    road.push(end);
    L.polyline(road, { color: '#c3b07b' }).addTo(this.map);
  }

  paintElements(hex: Hex) {
    if (hex.city) {
      this.paintCity(hex);
    } else {
      this.paintCountryside(hex);
    }
  }

  paintCity(hex: Hex) {
    const city = L.divIcon({
      html: `<div title="${hex.city}"><img src="assets/img/map/city.svg" ><p>${hex.city}</p></div>`,
      className: 'element-icon map-icon'
    });
    L.marker(this.computePoint(hex, 0, 2 / 3), { icon: city })
      .on('click', e => this.router.navigate(['/cities', hex.city]))
      .addTo(this.map);
  }

  paintCountryside(hex: Hex) {
    const nbOfElement = (hex.resource ? 1 : 0) + (hex.guardTower ? 1 : 0) + (hex.pointOfInterest ? 1 : 0);
    if (nbOfElement > 0) {
      const buildingPlots = this.getBuildingPlots(hex, nbOfElement);
      let index = 0;
      if (hex.resource) {
        this.paintResource(hex, buildingPlots[index]);
        index++;
      }
      if (hex.guardTower) {
        this.paintGuardTower(hex, buildingPlots[index]);
        index++;
      }
      if (hex.pointOfInterest) {
        this.paintPointOfInterest(hex, buildingPlots[index]);
        index++;
      }
    }
  }

  paintResource(hex: Hex, point) {
    const resource = L.divIcon({
      html: `<img src='assets/img/map/${hex.resource}.svg' >`,
      className: 'element-icon map-icon'
    });
    L.marker(point, { icon: resource }).addTo(this.map);
  }

  paintGuardTower(hex: Hex, point) {
    const tower = L.divIcon({
      html: '<img src="assets/img/map/tower_round.svg" >',
      className: 'element-icon map-icon'
    });
    L.marker(point, { icon: tower }).addTo(this.map);
  }

  paintPointOfInterest(hex: Hex, point) {
    const poi = L.divIcon({
      html: `<div title="${hex.pointOfInterest}"><img src="assets/img/map/ruins.svg" ><p>${hex.pointOfInterest}</p></div>`,
      className: 'element-icon map-icon'
    });
    L.marker(point, { icon: poi })
      .addTo(this.map);
  }

  getBuildingPlots(hex: Hex, nbOfElement: number): any[] {
    if (nbOfElement === 1) {
      return [this.computePoint(hex, 0, 2 / 3)];
    } else if (nbOfElement === 2) {
      return [
        this.computePoint(hex, - 1 / 4, 2 / 3),
        this.computePoint(hex, 1 / 4, 2 / 3)
      ];
    } else if (nbOfElement === 3) {
      return [
        this.computePoint(hex, 0, 1 / 3),
        this.computePoint(hex, - 1 / 4, 1),
        this.computePoint(hex, + 1 / 4, 1)
      ];
    }
  }

  computePoint(hex: Hex, xOffset: number, yOffset: number) {
    const even = hex.y % 2 === 0;
    const offset = even ? EVEN_X_OFFSET : ODD_X_OFFSET;
    return this.map.unproject([(hex.x + xOffset) * HEX_WIDTH + offset, (hex.y + yOffset) * HEX_HEIGHT + Y_OFFSET], this.map.getMaxZoom());
  }
}
