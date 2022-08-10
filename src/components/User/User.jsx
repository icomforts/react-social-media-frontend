import React, { useState } from "react";
import "./User.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, unFollowUser, followUser } from "../../store/slice/Auth";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { authData } = useSelector(selectAuth);
  const { user } = authData;
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = async () => {
    following
      ? await dispatch(unFollowUser({ id: person._id, data: user }))
      : await dispatch(followUser({ id: person._id, data: user }));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="user">
      <div>
        <img
          src={
            person.profileImage
              ? publicFolder + person.profileImage
              : publicFolder + "defaultProfile.jpg"
          }
          alt="profile"
          className="user__image"
        />
        <div className="user__info">
          <span className="user__info__name">{person.firstname}</span>
          <span className="user__info__account">@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following
            ? "user__button iButton iButton--reverse"
            : "user__button iButton"
        }
        onClick={handleFollow}
      >
        {following ? "UnFollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
