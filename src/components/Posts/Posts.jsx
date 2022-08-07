import React, { useEffect } from "react";
import "./Posts.scss";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../store/slice/Auth";
import { getTimelinePosts, selectPosts } from "../../store/slice/Posts";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const { authData } = useSelector(selectAuth);
  const { user } = authData;

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post data={post} key={post._id} />;
      })}
    </div>
  );
};

export default Posts;
