import React from "react";
import "./TrendCard.scss";

import { TrendData } from "../../Data/TrendData";

const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend, id) => {
        return (
          <div className="trendCard__trend">
            <span className="trendCard__trend__name">#{trend.name}</span>
            <span className="trendCard__trend__shares">
              {trend.shares}k shares
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
