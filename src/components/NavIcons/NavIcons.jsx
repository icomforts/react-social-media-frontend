import React from "react";
import "./NavIcons.scss";
import Home from "../../img/home.png";
import {
  UilSetting,
  UilSignOutAlt,
  UilComments,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/Auth";
const NavIcons = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <Link to="../chat">
        <UilComments color="#242d49" />
      </Link>
      <UilSetting />
      <UilSignOutAlt color="#242d49" onClick={() => handleLogout()} />
    </div>
  );
};

export default NavIcons;
