import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
// import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <a to="../home">
        <img src={Home} alt="" />
      </a>
      <UilSetting />
      <img src={Noti} alt="" />
      <a to="../chat">
        <img src={Comment} alt="" />
      </a>
    </div>
  );
};

export default NavIcons;
