import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import NavIcons from "../NavIcons/NavIcons";

import "./ProfileSide.scss";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <NavIcons />
      <ProfileCard location={"homePage"} />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
