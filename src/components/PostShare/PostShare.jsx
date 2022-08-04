import React, { useState, useRef } from "react";
import "./PostShare.scss";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  return (
    <div className="postShare">
      <img src={ProfileImage} alt="" className="postShare__avatar" />
      <div className="postShare__actions">
        <input type="text" placeholder="想說什麼呢?" />
        <div className="postShare__options">
          <div
            className="postShare__options__option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            照片
          </div>
          <div
            className="postShare__options__option"
            style={{ color: "var(--video)" }}
          >
            <UilPlayCircle />
            影片
          </div>
          <div
            className="postShare__options__option"
            style={{ color: "var(--location)" }}
          >
            <UilLocationPoint />
            位置
          </div>
          <div
            className="postShare__options__option"
            style={{ color: "var(--shedule)" }}
          >
            <UilSchedule />
            行程
          </div>
          <button className="postShare__share__button iButton">Share</button>
          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="postShare__preview">
            <UilTimes onClick={() => setImage(null)} />
            <img
              className="postShare__preview__image"
              src={URL.createObjectURL(image)}
              alt="preview"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
