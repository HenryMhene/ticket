import { Resource } from './Resource';
// payment.model.ts
export class Payment extends Resource {
  paymentID!: string;
  orderID!: string;
  paymentDateTime!: string;
  paymentAmount!: number;
  paymentMethod!: string; // e.g., "stripe"
  transactionID!: string; // Stripe transaction ID
  stripePaymentIntentID?: string; // Optionally, you can include the Stripe Payment Intent ID
}
