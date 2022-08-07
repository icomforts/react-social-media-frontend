import React, { useState } from "react";
import TrendCard from "../TrendCard/TrendCard";
import "./SideBar.scss";
import ShareModal from "../ShareModal/ShareModal";
import LogoSearch from "../LogoSearch/LogoSearch";

const SideBar = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="sideBar">
      <LogoSearch />

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
