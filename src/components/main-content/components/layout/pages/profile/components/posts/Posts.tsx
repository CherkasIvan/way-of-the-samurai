import React from "react";
import Post from "../../components/posts/post/Post.tsx";
import clasess from "./Posts.module.scss";
import AddPost from "../../../../../../../shared/add-post/AddPost.tsx";
import { Users } from "../../../../../../../../utils/data/users.ts";

const Posts = () => {
  const posts = Users.map((el, index) => (
    <Post
      message={el.message}
      name={el.name}
      key={el.id}
    ></Post>
  ));
  return (
    <div className={clasess.postsContainer}>
      <p className={clasess.postsTitle}>Here is my posts</p>
      {posts}
      <AddPost></AddPost>
    </div>
  );
};

export default Posts;
