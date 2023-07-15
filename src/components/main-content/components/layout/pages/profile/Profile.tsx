import {FC} from "react";
import classes from "./Profile.module.scss";
import { IPost } from "../../../../models/post.interface";
import PostsContainer from "./components/posts/PostsContainer";

interface IProfileProps {
  postsData: IPost[]
}

const Profile: FC<IProfileProps> = ({ postsData }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <PostsContainer postsData={postsData}/>
    </div>
  );
};

export default Profile;
