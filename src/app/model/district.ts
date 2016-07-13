import { Border } from './border'
import { Building } from './building'
export class District {
  buildings: Building[] = [];
  name: string;
  north: Border;
  south: Border;
  east: Border;
  west: Border;

}
