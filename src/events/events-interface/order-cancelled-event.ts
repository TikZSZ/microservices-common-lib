import { Subjects } from "../subjects";
import { OrderStatus } from "../types/order-status";

export interface OrderCancelledEvent{
  subject: Subjects.OrderCancelled;
  data: {
    orderId:string,
    status: OrderStatus.Cancelled,
    userId:string,
    expiresAt:string,
    ticket: {
      ticketId:string,
      price: number
    }
  }
}