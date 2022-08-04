import React from "react";
import "./ProfileCard.scss";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className="profileCard">
      <div className="profileCard__images">
        <img src={Cover} alt="" className="profileCard__images__cover" />
        <img src={Profile} alt="" className="profileCard__images__profile" />
      </div>
      <div className="profileCard__info">
        <span className="profileCard__info__name">Blake Lively</span>
        <span className="profileCard__info__profession">Actor</span>
      </div>
      <div className="profileCard__followStatus">
        <hr />
        <div>
          <div className="profileCard__followStatus__follow">
            <span className="profileCard__followStatus__follow__count">
              8456
            </span>
            <span className="profileCard__followStatus__follow__title">
              Followings
            </span>
          </div>
          <div className="profileCard__followStatus__line"></div>
          <div className="profileCard__followStatus__follow">
            <span className="profileCard__followStatus__follow__count">
              8456
            </span>
            <span className="profileCard__followStatus__follow__title">
              Follower
            </span>
          </div>
          {profilePage && (
            <>
              <div className="profileCard__followStatus__line"></div>
              <div className="profileCard__followStatus__follow">
                <span className="profileCard__followStatus__follow__count">
                  6
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
      {profilePage ? "" : <span className="profileCard__bottom">我的檔案</span>}
    </div>
  );
};

export default ProfileCard;
