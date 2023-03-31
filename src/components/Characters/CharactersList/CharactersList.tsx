import { FC, useState } from "react";
import { peopleAPI } from "../../../features/people/peopleAPI";
import { CharacterItem } from "./../CharacterItem/CharacterItem";
import { ICharacter } from "../../../types/CharacterType";
import "./CharactersList.sass";
import { Select } from "../../Select/Select";

export const CharactersList: FC = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const {
    data: people,
    error,
    isLoading,
  } = peopleAPI.useFetchPeopleQuery(page);

  const eyeColors = ["All", "brown", "red", "blue", "white"];

  const [color, setColor] = useState("All");

  const changeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
    console.log(color);
    setCharacters(
      people.results.map((character) => character.eye_color === e.target.value)
    );
  };

  // const sortCharactersColorEyes=(colorEye:SelectHTMLAttributes<HTMLSelectElement>)=>{console.log(colorEye);}

  return (
    <div>
      <div className="content">
        <div className="lang" onClick={() => console.log("hi!")}>
          language: en
        </div>
        <h1 className="header">
          {people && people.count} Peoples for you to choose your favorite
        </h1>
        <div>
          <div className="select">
            <div className="select_text">color eye</div>

            <Select options={eyeColors} value={color} onChange={changeColor} />
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
      <img src="../../../../../img/Frame 1.png" alt="Frame" className="img" />
    </div>
  );
};
