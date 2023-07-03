import React, {FC} from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts";
import { IPost } from "../../../../models/post.interface";
import { IActionType } from "../../../../../../redux/store";

interface IProfileProps {
  postsData: IPost[]
  dispatch: IActionType
}

const Profile: FC<IProfileProps> = ({ postsData, dispatch }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData}  dispatch={dispatch}/>
    </div>
  );
};

export default Profile;
