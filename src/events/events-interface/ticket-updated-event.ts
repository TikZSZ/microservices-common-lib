import { Subjects } from "../subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TickedUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId:string;
  }
}
