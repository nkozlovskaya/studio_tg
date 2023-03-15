import { FC } from "react";
import { IPerson } from "../../types/PersonType";

interface PersonItemProps {
  person: IPerson;
}

export const PersonItem: FC<PersonItemProps> = ({ person }) => {
  return (
    <div>
      {person.name}
      {person.birth_year}
    </div>
  );
};
