import { FC, useState } from "react";
import { ICharacter } from "../../../types/CharacterType";
import "./CharacterItem.sass";

interface CharacterItemProps {
  person: ICharacter;
}

export const CharacterItem: FC<CharacterItemProps> = ({ person }) => {
  // const [gender, setGender] = useState("");

  // let className = "character_gender";
  // if (gender === "female") {
  //   return (className += " male");
  // }
  // if (gender === "female") {
  //   return (className += " female");
  // }
  // if (gender === "hermaphrodite") {
  //   return (className += " hermaphrodite");
  // }

  return (
    <div className="character">
      <h3 className="character_name"> {person.name}</h3>
      <div className="character_facts">
        {person.height && (
          <div>
            <div className="character_fact">{person.height}</div>
            <div className="character_info">height</div>
          </div>
        )}
        {person.mass && person.mass !== "unknown" && (
          <div className="character_data">
            <div className="character_fact">{Math.floor(+person.mass)}</div>
            <div className="character_info">mass</div>
          </div>
        )}
      </div>
      <div className="character_descr">
        {person.gender === "male" && (
          <div className="character_gender male"> {person.gender}</div>
        )}
        {person.gender === "female" && (
          <div className="character_gender female"> {person.gender}</div>
        )}
        {person.gender === "hermaphrodite" && (
          <div className="character_gender hermaphrodite"> {person.gender}</div>
        )}
        {person.birth_year !== "unknown" && (
          <div className="character_birth_year"> {person.birth_year}</div>
        )}
      </div>
    </div>
  );
};
