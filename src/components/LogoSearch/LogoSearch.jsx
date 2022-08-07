import React from "react";
import "./LogoSearch.scss";
import { UilSearch } from "@iconscout/react-unicons";
const LogoSearch = () => {
  return (
    <div className="logoSearch">
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
