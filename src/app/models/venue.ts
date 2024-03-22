import { Resource } from './Resource';
import { Category } from './category';
// venue.model.ts
export class Venue extends Resource{
  venueID!: string;
  venueName!: string;
  address!: string;
  city!: string;
  state!: string;
  zipCode!: string;
  capacity!: number;
  amenities!: string[];
}
