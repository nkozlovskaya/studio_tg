import { FC, useState } from "react";
import { peopleAPI } from "../../../features/reducers/peopleAPI";
import { CharacterItem } from "./../CharacterItem/CharacterItem";
import { ICharacter } from "../../../types/CharacterType";
import "./CharactersList.sass";
// import { Select } from "../../UI/Select/Select";
// import { useDispatch } from "react-redux";
// import changeColor from "../../../features/reducers/changeColorSlice";

export const CharactersList: FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: people,
    error,
    isLoading,
  } = peopleAPI.useFetchPeopleQuery(page);

  // const [characters, setCharacters] = useState(people);

  // const eyeColors = ["All", "brown", "red", "blue", "white"];

  // const [color, setColor] = useState("All");

  // const changeColorFunc = (color: string) => {
  //   setColor(color);
  //   if (people) {
  //     setCharacters(
  //       people.results.filter((character) => character.eye_color === color)
  //     );
  //   }
  // };

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

            {/* <Select
              value={color}
              options={eyeColors}
              onChange={changeColorFunc}
            /> */}
          </div>

          {isLoading && <h1>Идет загрузка...</h1>}

          {error && <h1>Произошла ошибка при загрузке</h1>}

          <div className="characters">
            {people &&
              people.results
                .map((person: ICharacter) => (
                  <CharacterItem key={person.name} person={person} />
                ))
                .slice(0, -1)}
          </div>
        </div>
      </div>
      <img src="../../../../../img/Frame 1.png" alt="Frame" className="img" />
    </div>
  );
};
