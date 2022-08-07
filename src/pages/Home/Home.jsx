import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="home container">
      <ProfileSide />
      <PostSide />
      <SideBar />
    </div>
  );
};
export default Home;
