import React, { FC } from "react";
import Post from "../../components/posts/post/Post";
import classes from "./Posts.module.scss";
import AddPost from "../../../../../../../shared/add-post/AddPost";
import { IDialog } from "../../../../../../models/dialog.interface";

interface IPostProps {
  postsData:IDialog[]
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
    <div className={classes.postsContainer}>
      <p className={classes.postsTitle}>Here is my posts</p>
      {posts}
      <AddPost></AddPost>
    </div>
  );
};

export default Posts;
