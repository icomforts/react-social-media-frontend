import React, { useState } from "react";
import "./Post.scss";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
const Post = ({ data }) => {
  const [liked, setLiked] = useState();
  const [likes, setLikes] = useState(data.likes.length);

  //   const handleLike = () => {
  //     likePost(data._id, user._id);
  //     setLiked((prev) => !prev);
  //     liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  //   };
  return (
    <div className="post">
      <img className="post__image" src={data.img} alt="" />
      <div className="post__react">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span
        className="post__likeCount"
        style={{ color: "var(--gray)", fontSize: "12px" }}
      >
        {likes} likes
      </span>
      <div className="post__detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
