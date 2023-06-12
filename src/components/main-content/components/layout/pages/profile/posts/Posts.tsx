import React from "react";
import Post from "./post/Post.tsx";
import clasess from "./Posts.module.scss";
import AddPost from "../../../../../../shared/add-post/AddPost.tsx";

const Posts = () => {
  return (
    <div className={clasess.postsContainer}>
      <p className={clasess.postsTitle}>Here is my posts</p>
      <Post message="He, how are you"></Post>
      <Post message="He, how are you?"></Post>
      <Post message="Fine"></Post>
      <Post message="Fiiiiine!!!"></Post>
      <AddPost></AddPost>
    </div>
  );
};

export default Posts;
