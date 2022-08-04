import React, { useState } from "react";
import NavIcons from "../NavIcons/NavIcons";
import TrendCard from "../TrendCard/TrendCard";
import "./SideBar.scss";
import ShareModal from "../ShareModal/ShareModal";
const SideBar = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="sideBar">
      <NavIcons />
      <TrendCard />
      <button
        className="sideBar__share__button iButton"
        onClick={() => setModalOpened(true)}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default SideBar;
