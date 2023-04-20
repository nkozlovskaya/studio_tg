import { FC } from "react";
import { CharactersList } from "../components/Characters/CharactersList/CharactersList";
import { Navbar } from "../components/UI/Navbar/Navbar";


export const CharactersPage: FC = () => {
  return (
    <div>
      <Navbar />
      <CharactersList />
    </div>
  );
};
