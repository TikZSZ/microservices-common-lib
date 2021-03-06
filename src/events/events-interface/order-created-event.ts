import { OrderStatus } from "../types/order-status";
import { Subjects } from "../subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    orderId:string,
    version: number,
    status: OrderStatus.Created,
    expiresAt:string,
    ticket: {
      ticketId:string,
      price: number
    }
  }
}

