import React, { useState, useEffect } from "react";
import "./Conversation.scss";
import UserApi from "../../api/UserApi";
const Conversation = ({ chatData, currentUser, online }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = chatData.members.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { user } = await UserApi.get(userId);
        setUserData(user);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  return (
    <div className="conversation">
      <div className="conversation__follower">
        {online && <div className="conversation__follower__onlineDot"></div>}
        <img
          className="conversation__follower__image"
          src={
            userData?.profileImage
              ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profileImage
              : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.jpg"
          }
          alt="Profile"
        />
        <div className="conversation__follower__info">
          <span className="conversation__follower__info__name">
            {userData?.firstname} {userData?.lastname}
          </span>
          <span style={{ color: online ? "#51e200" : "" }}>
            {online ? "Online" : "Offline"}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Conversation;
