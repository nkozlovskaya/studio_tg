import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Error.sass";
export const Error: FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  return (
    <div className="error">
      <h1 className="error_h">404</h1>
      <img
        src="../../../../img/teamRocket.png"
        alt="teamRocket"
        className="error_img"
      />
      <button className="error_btn" onClick={goBack}>
        Return
      </button>
    </div>
  );
};
