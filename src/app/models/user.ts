import { Resource } from './Resource';
import { Ticket } from './ticket';
export class User extends Resource {
  override id!: string;
  username!: string;
  firstName!: string;
  lastName!: string;
  profilePictureUrl?: string;
  email!: string;
  emailVerified!: boolean;
  mobileNumber!: string;
  mobileCountryCode!: string;
  paymentVerified!: boolean;
  userDescription?: string;
  birthday?: Date;
  location?: string;
  geoLocation?: string;
  active!: boolean;
  userStatus?: string;
  notificationPreferences: {
      email: boolean;
      sms: boolean;
      whatsapp: boolean;
  } = {
      email: true,
      sms: true,
      whatsapp: true,
  };
  createdAt!: Date;
  updatedAt!: Date;
  purchasedTickets?: Array<Ticket>;
  favoriteEvents?: Array<Event>;
  password!: string;
}
