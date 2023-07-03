import { FC } from "react";
import Post from "../../components/posts/post/Post";
import classes from "./Posts.module.scss";
import { IPost } from "../../../../../../models/post.interface";
import AddTextAreaMessage from "../../../../../../../shared/add-post/AddTextAreaMessage";
import { IActionType } from "../../../../../../../../redux/store";

interface IPostProps {
  postsData:IPost[],
  dispatch: IActionType
}

const Posts: FC<IPostProps> = ({ postsData, dispatch}) => {
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
      <AddTextAreaMessage  
      textAreaLabel="post" 
      dispatch={dispatch}/>
    </div>
  );
};

export default Posts;
