import { Border } from './border';
import { Building } from './building';
export interface District {
  buildings?: Building[];
  name: string;
  north: Border;
  south: Border;
  east: Border;
  west: Border;

}
