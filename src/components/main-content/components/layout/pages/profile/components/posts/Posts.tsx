import { FC } from "react";
import Post from "../../components/posts/post/Post";
import classes from "./Posts.module.scss";
import { IPost } from "../../../../../../models/post.interface";
import AddTextAreaMessage from "../../../../../../../shared/add-post/AddTextAreaMessage";
import { AddPostActionCreator, UpdatePostActionCreator } from "../../../../../../../../redux/actions";
import store from "../../../../../../../../redux-store/redux-store";
import { connect } from "react-redux";
import { IState } from "../../../../../../models/state.interface";
import { IAction } from "../../../../../../../../utils/models/action.interface";

interface IPostProps {
  postsData:IPost[],
  updatePostHeandler: (text:string) => void
  addPostHeandler: () => void
}

const Posts: FC<IPostProps> = ({ postsData, updatePostHeandler, addPostHeandler }) => {
  const posts = postsData.map((el:IPost) => (
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
      addPostText={addPostHeandler}
      updateNewPostText={updatePostHeandler}/>  
    </div>
  );
};

let mapStateToProps = (state: IState) => {}
let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
  return {
    addPostText: () => {
      let action = AddPostActionCreator()
      dispatch(action)
    },
    updateNewPostText: (text: string) => {
      let action = UpdatePostActionCreator(text)
      dispatch(action)
    }
  }
}

const PostTextAreaMessage = connect(mapStateToProps, mapDispatchToProps)(AddTextAreaMessage)
export default Posts;
