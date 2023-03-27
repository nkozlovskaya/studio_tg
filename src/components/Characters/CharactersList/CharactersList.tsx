import { FC, useState } from "react";
import { peopleAPI } from "../../../features/people/peopleAPI";
import { CharacterItem } from "./../CharacterItem/CharacterItem";
import { ICharacter } from "../../../types/CharacterType";
import "./CharactersList.sass";

export const CharactersList: FC = () => {
  const [page, setPage] = useState(7);

  const {
    data: people,
    error,
    isLoading,
  } = peopleAPI.useFetchPeopleQuery(page);

  return (
    <div className="content">
      <div className="lang" onClick={() => console.log("hi!")}>
        language: en
      </div>
      <h1 className="header">60 Peoples for you to choose your favorite</h1>
      <div>
        <div className="select">
          <div className="select_text">color eye</div>
          <select name="color eye" id="color_eye">
            <option disabled value="All">
              All
            </option>
            <option value="brown">brown</option>
            <option value="red ">red</option>
            <option value="blue">blue</option>
            <option value="white">white</option>
          </select>
        </div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        <div className="characters">
          {people &&
            people.results.map((person: ICharacter) => (
              <CharacterItem key={person.name} person={person} />
            ))}
        </div>
      </div>
    </div>
  );
};
