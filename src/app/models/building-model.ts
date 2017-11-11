export type BuildingSize = 'NORMAL' | 'MEDIUM' | 'LARGE';

export class BuildingModel {
    id: string;
    name: string;
    size: BuildingSize = 'NORMAL';
    map = '';
    icon = '';
    economy = 0;
    loyalty = 0;
    stability = 0;
    defence = 0;
    value = 0;
    minorMagicObject = 0;
    mediumMagicObject = 0;
    majorMagicObject = 0;
    price = 0;
    unrest = 0;
    requiredHouses = 0;
    halvedCosts: string[] = [];
    upgradeTo: string[] = [];
}
