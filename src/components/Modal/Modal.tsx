import { FC } from "react";
import "./Modal.sass";
import "./../Characters/CharacterItem/CharacterItem.sass";
import { ICharacter } from "../../types/CharacterType";

interface ModalProps {
  active: boolean;
  onClose: () => void;
  person: ICharacter;
}

export const Modal: FC<ModalProps> = ({ active, onClose, person }) => {
  if (!active) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <>
          <button className="closeIcon" onClick={onClose}>
            <img src="../../../../img/closeIcon.png" alt="close" />
          </button>

          <div className="foto">
            {person.gender === "female" && (
              <>
                <img
                  src="../../../../../img/female.png"
                  alt="female"
                  className="img"
                />
                <div className="foto_info">
                  <div className="character_gender female">{person.gender}</div>
                  {person.birth_year !== "unknown" && (
                    <div className="character_birth_year">
                      {person.birth_year}
                    </div>
                  )}
                </div>
              </>
            )}
            {person.gender === "hermaphrodite" && (
              <>
                <img
                  src="../../../../../img/hermaphrodite.png"
                  alt="hermaphrodite"
                  className="img"
                />
                <div className="foto_info">
                  <div className="modal_gender hermaphrodite">
                    {person.gender}
                  </div>
                  {person.birth_year !== "unknown" && (
                    <div className="modal_birth_year">{person.birth_year}</div>
                  )}
                </div>
              </>
            )}
            {person.gender === "male" && (
              <>
                <img
                  src="../../../../../img/male.png"
                  alt="male"
                  className="img"
                />
                <div className="foto_info">
                  <div className="character_gender male">{person.gender}</div>
                  {person.birth_year !== "unknown" && (
                    <div className="character_birth_year">
                      {person.birth_year}
                    </div>
                  )}
                </div>
              </>
            )}
            {!person.gender && (
              <>
                {person.birth_year !== "unknown" && (
                  <div className="character_birth_year">
                    {person.birth_year}
                  </div>
                )}
              </>
            )}
          </div>
          <div className="descr">
            <div className="descr_name">{person.name}</div>
            <div className="descr_info">
              {person.hair_color !== "n/a" && (
                <div className="descr_text">
                  hair color : {person.hair_color}
                </div>
              )}
              <div className="descr_text">skin color - {person.skin_color}</div>
            </div>
            <div className="descr_extra">
              <div className="size">
                <div className="descr_extra_data ">{person.height}</div>
                <div className="evidence">height</div>
              </div>

              {person.mass && person.mass !== "unknown" && (
                <div className="size">
                  <div className="descr_extra_data ">
                    {person.mass.slice(0, 4)}
                  </div>
                  <div className="evidence">mass</div>
                </div>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

// <div className={active ? "modal active" : "modal"} onClick={closeModal}>
