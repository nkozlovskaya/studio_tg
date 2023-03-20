import { FC, useState } from "react";
import { peopleAPI } from "../../features/people/peopleAPI";
import { IPerson } from "../../types/PersonType";


import { PersonItem } from "./PersonItem";

export const PeopleList: FC = () => {
  const [page, setPage] = useState(7);
  const {
    data: people,
    error,
    isLoading,
  } = peopleAPI.useFetchPeopleQuery(page);

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {people &&
        people.results.map((person: IPerson) => (
          <PersonItem key={person.name} person={person} />
        ))}
    </div>
  );
};
