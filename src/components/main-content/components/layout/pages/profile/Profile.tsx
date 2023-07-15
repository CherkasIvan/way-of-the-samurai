import {FC} from "react";
import classes from "./Profile.module.scss";
import { IPost } from "../../../../models/post.interface";
import PostsContainer from "./components/posts/PostsContainer";

interface IProfileContainerProps {
  postsData: IPost[],
  updatePostHeandler: (text:string) => void
  addPostHeandler: () => void
}

const Profile: FC<IProfileContainerProps> = ({ postsData, updatePostHeandler, addPostHeandler }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <PostsContainer postsData={postsData} updatePostHeandler={updatePostHeandler} addPostHeandler={addPostHeandler}/>
    </div>
  );
};

export default Profile;
