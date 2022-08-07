import React, { useEffect, useState } from "react";
import "./ProfileCard.scss";

import { selectAuth, getUser } from "../../store/slice/Auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectPosts } from "../../store/slice/Posts";
import ProfileModal from "../ProfileModal/ProfileModal";

const ProfileCard = ({ location }) => {
  const dispatch = useDispatch();
  const { authData } = useSelector(selectAuth);
  const { user } = authData;
  const posts = useSelector(selectPosts);
  const [modalOpened, setModalOpened] = useState(false);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profileCard">
      <div className="profileCard__images">
        <img
          src={
            user.coverImage
              ? serverPublic + user.coverImage
              : serverPublic + "defaultCover.jpg"
          }
          alt="CoverImage"
          className="profileCard__images__cover"
        />
        <img
          src={
            user.profileImage
              ? serverPublic + user.profileImage
              : serverPublic + "defaultProfile.jpg"
          }
          alt="ProfileImage"
          className="profileCard__images__profile"
        />
      </div>

      <div className="profileCard__info">
        {location === "profilePage" && (
          <div className="profileCard__info__edit">
            <div
              className="profileCard__info__edit__button iButton iButton--reverse"
              onClick={() => setModalOpened(true)}
            >
              Edit
            </div>
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              profileData={user}
            />
          </div>
        )}
        <span className="profileCard__info__name">
          {user.firstname} {user.lastname}
        </span>
        <span className="profileCard__info__about">
          {user.about ? user.about : "Write about yourself"}
        </span>
      </div>
      <div className="profileCard__followStatus">
        <hr />
        <div>
          <div className="profileCard__followStatus__follow">
            <span className="profileCard__followStatus__follow__count">
              {user.following.length}
            </span>
            <span className="profileCard__followStatus__follow__title">
              Followings
            </span>
          </div>
          <div className="profileCard__followStatus__line"></div>
          <div className="profileCard__followStatus__follow">
            <span className="profileCard__followStatus__follow__count">
              {user.followers.length}
            </span>
            <span className="profileCard__followStatus__follow__title">
              Follower
            </span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="profileCard__followStatus__line"></div>
              <div className="profileCard__followStatus__follow">
                <span className="profileCard__followStatus__follow__count">
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span className="profileCard__followStatus__follow__title">
                  Posts
                </span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span className="profileCard__bottom">
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            我的檔案
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
