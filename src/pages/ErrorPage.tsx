import { FC } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Error } from "../components/Error/Error";

export const ErrorPage: FC = () => {
  return (
    <div>
      <Navbar />
      <Error />
    </div>
  );
};
