import { Resource } from './Resource';
// order-detail.model.ts
export class OrderDetail extends Resource {
  orderID!: string;
  ticketID!: string;
  quantity!: number;
  subtotalAmount!: number;
}
