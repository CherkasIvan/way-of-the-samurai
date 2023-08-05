import {FC} from "react";
import classes from "./Profile.module.scss";
import { IPost } from "../../../../models/post.interface";
import PostsContainer from "./components/posts/PostsContainer";

interface IProfileContainerProps {
  profilePage: any,
  updatePostHeandler: (text:string) => void
  addPostHeandler: () => void
}

const Profile: FC<IProfileContainerProps> = ({ profilePage, updatePostHeandler, addPostHeandler }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <PostsContainer postsData={profilePage.posts} updatePostHeandler={updatePostHeandler} addPostHeandler={addPostHeandler}/>
    </div>
  );
};

export default Profile;
