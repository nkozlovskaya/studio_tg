import { FC } from "react";
import "./Home.sass";

export const Home: FC = () => {
  return (
    <div className="home">
      <div className="home_line"></div>
      <div className="home_content">
        <div className="home_descr">
          <h1 className="home_title">Find all your favorite character</h1>
          <h3 className="home_subtitle">
            You can find out all the <br />
            information about your favorite
            <br /> characters
          </h3>
          <button className="home_button">See more...</button>
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
