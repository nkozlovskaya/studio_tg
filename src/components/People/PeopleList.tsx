import { FC, useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { peopleAPI } from "../../features/people/peopleAPI";
import { IPerson } from "../../types/PersonType";

import styles from "./PeopleList.module.css";
import { PersonItem } from "./PersonItem";

export const PeopleList: FC = () => {
  // const dispatch = useAppDispatch();
  const [page, setPage] = useState(10);
  const {
    data: people,
    error,
    isLoading,
    refetch,
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
