import { ICharacter } from "./CharacterType";

export interface IResult {
  count: number;
  next: string;
  previous?: any;
  results: ICharacter[];
}
