import React, {FC} from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts";
import { IPost } from "../../../../models/post.interface";

interface IProfileProps {
  postsData: IPost[]
  updateMessageText: (text:string) => void
}

const Profile: FC<IProfileProps> = ({ postsData, updateMessageText }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData} updateMessageText={updateMessageText}/>
    </div>
  );
};

export default Profile;
