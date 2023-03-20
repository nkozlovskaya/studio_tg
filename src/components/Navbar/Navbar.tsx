import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.sass";

export const Navbar: FC = () => {
  return (
    <div className="navbar">
      <img src="../../../../img/Logo.png" alt="Logo" className="navbar_logo" />
      <div className="navbar_links">
        <Link to={"/"} className="navbar_link">
          Home
        </Link>
        <Link to={"/characters"} className="navbar_link">
          Characters
        </Link>
      </div>
    </div>
  );
};
