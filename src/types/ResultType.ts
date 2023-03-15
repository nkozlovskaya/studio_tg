import { IPerson } from "./PersonType";

export interface IResult {
  count: number;
  next: string;
  previous?: any;
  results: IPerson[];
}
