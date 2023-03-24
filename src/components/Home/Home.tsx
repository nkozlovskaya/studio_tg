import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.sass";

export const Home: FC = () => {
  const navigate = useNavigate();

  const goToCharacters = () => navigate("/characters");

  return (
    <div className="home">
      <div className="home_content">
        <div className="home_descr">
          <h1 className="home_title">
            Find all your <br /> favorite <br />
            scharacter
          </h1>
          <h3 className="home_subtitle">
            You can find out all the <br />
            information about your favorite
            <br /> characters
          </h3>
          <button className="home_button" onClick={goToCharacters}>
            See more...
          </button>
        </div>
        <img
          src="./../../../../img/banner.png"
          alt="yoda"
          className="home_img"
        />
      </div>
    </div>
  );
};
