import { FC } from "react";
import "./Modal.sass";

interface ModalProps {
  active: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ active, onClose }) => {
  if (!active) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}></div>
      {/* <button className="modal_close" onClick={onClose}>
        x
      </button> */}
    </div>
  );
};

// <div className={active ? "modal active" : "modal"} onClick={closeModal}>
