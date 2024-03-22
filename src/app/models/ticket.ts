import { Resource } from './Resource';
// ticket.model.ts
export class Ticket extends Resource{
  ticketID!: string;
  eventID!: string;
  ticketType!: string;
  price!: number;
  quantityAvailable!: number;
  saleStartDateTime!: string; // Consider using a Date object if applicable
  saleEndDateTime!: string;   // Consider using a Date object if applicable
  description!: string;       // Additional information about the ticket
  isVIP!: boolean;            // Flag indicating if the ticket is a VIP ticket
  seatNumber?: string;       // Optional field for assigned seat number
  isAvailable!: boolean;
}
