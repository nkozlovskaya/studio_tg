import { FC } from "react";
import { Home } from "../components/Home/Home";
import { Navbar } from "../components/UI/Navbar/Navbar";

export const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};
