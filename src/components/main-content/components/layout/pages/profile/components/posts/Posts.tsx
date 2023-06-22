import React, { FC } from "react";
import Post from "../../components/posts/post/Post.tsx";
import clasess from "./Posts.module.scss";
import AddPost from "../../../../../../../shared/add-post/AddPost.tsx";

interface IPostProps {
  message: string;
  name: strig;
  id: number;
  counter: number;
}

const Posts: FC<IPostProps> = ({ postsData }) => {
  const posts = postsData.map((el, index) => (
    <Post
      message={el.message}
      name={el.name}
      id={el.id}
      counter={el.counter}
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
