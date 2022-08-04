import React from "react";
import Logo from "../../img/logo.png";
import "./LogoSearch.scss";
import { UilSearch } from "@iconscout/react-unicons";
const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="search__icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
