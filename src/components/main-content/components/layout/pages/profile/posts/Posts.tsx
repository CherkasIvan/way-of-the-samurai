import React from "react";
import Post from "./post/Post.tsx";
import clasess from "./Posts.module.scss";
import AddPost from "../../../../../../shared/add-post/AddPost.tsx";

const Posts = () => {
  return (
    <div className={clasess.postsContainer}>
      <p className={clasess.postsTitle}>Here is my posts</p>
      <Post
        message="He, how are you"
        likeCounter="5"
      ></Post>
      <Post
        message="He, how are you?"
        likeCounter="5"
      ></Post>
      <Post message="Fine" likeCounter="5"></Post>
      <Post message="Fiiiiine!!!"></Post>
      <AddPost></AddPost>
    </div>
  );
};

export default Posts;
