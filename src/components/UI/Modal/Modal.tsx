import { FC } from "react";
import "./Modal.sass";

interface ModalProps {
  active: boolean;
  setActive: (str: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
};
