import React from "react";
import "./ProfileInfo.scss";
import FollowersCard from "../FollowersCard/FollowersCard";
import NavIcons from "../NavIcons/NavIcons";

const ProfileInfo = () => {
  return (
    <div className="profileSide">
      <NavIcons />
      <FollowersCard />
    </div>
  );
};

export default ProfileInfo;
