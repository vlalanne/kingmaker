export type PointOfInterestType = 'cave' | 'tomb' | 'statue' | 'bridge' | 'obelisk' | 'tent' | 'magic' | 'ruins' | 'animal';
export interface PointOfInterest {
    name: string;
    type: string;
}
export interface Hex {
    x: number;
    y: number;
    city?: string;
    resource?: string;
    guardTower?: boolean;
    pointOfInterest?: PointOfInterest;
    roads?: boolean;
}
