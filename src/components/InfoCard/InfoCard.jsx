import React, { useState } from "react";
import "./InfoCard.scss";
import ProfileModal from "../ProfileModal/ProfileModal";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="infoCard">
      <div className="infoCard__head">
        <h4>你的資料</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="infoCard__info">
        <span className="infoCard__info__title">
          <b>簡介 </b>
        </span>
        <span className="infoCard__info__content">talk about yourself</span>
      </div>
    </div>
  );
};

export default InfoCard;
