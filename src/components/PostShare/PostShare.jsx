import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PostShare.scss";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { selectAuth } from "../../store/slice/Auth";
import { uploadImage } from "../../store/slice/Upload";
import { uploadPost } from "../../store/slice/Posts";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();

  const { authData } = useSelector(selectAuth);
  const { user } = authData;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!desc.current.value) return;
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      dispatch(uploadImage(data));
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  return (
    <div className="postShare">
      <img src={ProfileImage} alt="" className="postShare__avatar" />
      <div className="postShare__actions">
        <input ref={desc} required type="text" placeholder="想說什麼呢?" />
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
            style={{ color: "var(--schedule)" }}
          >
            <UilSchedule />
            行程
          </div>
          <button
            className="postShare__share__button iButton"
            onClick={handleUpload}
          >
            Share
          </button>
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
