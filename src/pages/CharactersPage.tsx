import { FC } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { PeopleList } from "../components/People/PeopleList";

export const CharactersPage: FC = () => {
  return (
    <div>
      <Navbar />
      <PeopleList />
    </div>
  );
};
