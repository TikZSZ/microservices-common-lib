import { OrderStatus } from "../types/order-status";
import { Subjects } from "../subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    orderId:string,
    status: OrderStatus.Created,
    userId:string,
    expiresAt:string,
    ticket: {
      ticketId:string,
      price: number
    }
  }
}

