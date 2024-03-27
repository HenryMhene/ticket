import { Resource } from './Resource';
// event.model.ts
export class Event extends Resource{
  eventID!: string;
  eventName!: string;
  description!: string;
  startDateTime!: string; // Consider using a Date object if applicable
  endDateTime!: string;   // Consider using a Date object if applicable
  venue!: string;      // Venue name
  venueID!: string;       // Foreign Key referencing Venues
  organizerUserID!: string; // Foreign Key referencing Users
  categories!: string[];   // List of event categories
  tags!: string[];         // List of event tags
  imageURL!: string;       // URL pointing to event image/poster
  capacity!: number;
  ticketTypes!: string[];  // List of different ticket types
  salesStartDate!: string; // Consider using a Date object if applicable
  salesEndDate!: string;   // Consider using a Date object if applicable
  status!: string;         // Event status (e.g., upcoming, ongoing, completed)
  externalLinks!: string[]; // List of external links related to the event
  createdDateTime!: string; // Consider using a Date object if applicable
  lastUpdatedDateTime!: string; // Consider using a Date object if applicable
}
