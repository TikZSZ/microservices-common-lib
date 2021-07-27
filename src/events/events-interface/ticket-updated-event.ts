import { Subjects } from "../subjects";

export interface TickedUpdated {
  subject: Subjects.TickedUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId:string;
  };
}
