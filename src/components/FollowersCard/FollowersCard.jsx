import React from "react";
import "./FollowersCard.scss";

import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>誰在追蹤你</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="followersCard__follower" key={id}>
            <div>
              <img
                src={follower.img}
                alt=""
                className="followersCard__follower__image"
              />
              <div className="followersCard__follower__info">
                <span className="followersCard__follower__info__name">
                  {follower.name}
                </span>
                <span className="followersCard__follower__info__account">
                  @{follower.account}
                </span>
              </div>
            </div>
            <button className="followersCard__follower__button iButton">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
