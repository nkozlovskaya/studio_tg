import { FC } from "react";
import "./Error.sass";
export const Error: FC = () => {
  return (
    <div className="error">
      <h1 className="error_h">404</h1>
      <img
        src="../../../../img/teamRocket.png"
        alt="teamRocket"
        className="error_img"
      />
    </div>
  );
};
