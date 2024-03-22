import { Resource } from './Resource';
// order.model.ts
export class Order extends Resource{
  orderID!: string;
  userID!: string;
  orderDateTime!: string;
  totalAmount!: number;
  paymentStatus!: string;
}
