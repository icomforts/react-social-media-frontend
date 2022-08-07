import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import SideBar from "../../components/SideBar/SideBar";
import "./Profile.scss";
const Profile = () => {
  return (
    <div className="profile container">
      <ProfileInfo />
      <div className="profile__main">
        <ProfileCard location={"profilePage"} />
        <PostSide />
      </div>
      <SideBar />
    </div>
  );
};

export default Profile;
