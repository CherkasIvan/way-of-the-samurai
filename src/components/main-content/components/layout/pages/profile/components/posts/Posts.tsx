import { FC } from "react";
import Post from "../../components/posts/post/Post";
import classes from "./Posts.module.scss";
import { IPost } from "../../../../../../models/post.interface";
import AddTextAreaMessage from "../../../../../../../shared/add-post/AddTextAreaMessage";
import { IAction } from "../../../../../../../../utils/models/action.interface";
import { AddPostActionCreator, UpdatePostActionCreator } from "../../../../../../../../redux/actions";

interface IPostProps {
  postsData:IPost[],
  dispatch: (action: IAction) => void
}

const Posts: FC<IPostProps> = ({ postsData, dispatch}) => {
  const posts = postsData.map((el:IPost) => (
    <Post
      message={el.message}
      name={el.name}
      id={el.id}
      counter={el.counter}
      key={el.id}
    ></Post>
  ));
  
const updatePostHeandler = (text: string) => {
  let action = UpdatePostActionCreator(text)
  dispatch(action)
}

const addPostHeandler = () => {
  let action = AddPostActionCreator()
  dispatch(action)
}

  return (
    <div className={classes.postsContainer}>
      <p className={classes.postsTitle}>Here is my posts</p>
      {posts}
      <AddTextAreaMessage 
      textAreaLabel="post"
      addPostText={addPostHeandler}
      updateNewPostText={updatePostHeandler}/>  
    </div>
  );
};

export default Posts;
