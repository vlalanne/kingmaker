export class BuildingModel {
  id: string;
  name: string;
  size: string = "NORMAL";
  map: string = "";
  icon: string = "";
  economy: number = 0;
  loyalty: number = 0;
  stability: number = 0;
  defence: number = 0;
  value: number = 0;
  minorMagicObject: number = 0;
  mediumMagicObject: number = 0;
  majorMagicObject: number = 0;
  price: number = 0;
  unrest: number = 0;
  requiredHouses: number = 0;
  halvedCosts: string[] = [];
  upgradeTo: string[]=[];


  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  setSize(size: string) {
    this.size = size;
    return this;
  }

  setMap(map: string) {
    this.map = map;
    return this;
  }

  setIcon(icon: string) {
    this.icon = icon;
    return this;
  }

  setEconomy(economy: number) {
    this.economy = economy
    return this;
  }

  setLoyalty(loyalty: number) {
    this.loyalty = loyalty
    return this;
  }

  setStability(stability: number) {
    this.stability = stability
    return this;
  }

  setDefence(defence: number) {
    this.defence = defence
    return this;
  }

  setValue(value: number) {
    this.value = value
    return this;
  }

  setMinorMagicObject(minorMagicObject: number) {
    this.minorMagicObject = minorMagicObject
    return this;
  }

  setMediumMagicObject(mediumMagicObject: number) {
    this.mediumMagicObject = mediumMagicObject
    return this;
  }

  setMajorMagicObject(majorMagicObject) {
    this.majorMagicObject = majorMagicObject
    return this;
  }

  setPrice(price) {
    this.price = price
    return this;
  }

  setUnrest(unrest) {
    this.unrest = unrest
    return this;
  }

  setRequiredHouses(requiredHouses) {
    this.requiredHouses = requiredHouses;
    return this;
  }

  addUpgradeTo(building) {
    this.upgradeTo.push(building);
    return this;
  }

  addHalvedCost(building) {
    this.halvedCosts.push(building);
    return this;
  }
}
