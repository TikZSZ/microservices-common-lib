import { Subjects } from "../subjects";

export interface TickedUpdatedEvent {
  subject: Subjects.TickedUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId:string;
  }
}
