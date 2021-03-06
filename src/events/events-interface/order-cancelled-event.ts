import { Subjects } from "../subjects";
import { OrderStatus } from "../types/order-status";

export interface OrderCancelledEvent{
  subject: Subjects.OrderCancelled;
  data: {
    orderId:string,
    version:number,
    status: OrderStatus.Cancelled,
    ticket: {
      ticketId:string,
      price: number
    }
  }
}