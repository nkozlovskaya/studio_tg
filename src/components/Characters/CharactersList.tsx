import { FC, useState } from "react";
import { peopleAPI } from "../../features/people/peopleAPI";
import { ICharacter } from "../../types/CharacterType";
import { CharacterItem } from "./CharacterItem/CharacterItem";
import "./CharactersList.sass";

// import { CharacterItem } from "./CharacterItem";

export const CharactersList: FC = () => {
  const [page, setPage] = useState(7);
  const {
    data: people,
    error,
    isLoading,
  } = peopleAPI.useFetchPeopleQuery(page);

  return (
    <div>
      <h1 className="header">60 Peoples for you to choose your favorite</h1>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {people &&
        people.results.map((person: ICharacter) => (
          <CharacterItem key={person.name} person={person} />
        ))}
    </div>
  );
};
