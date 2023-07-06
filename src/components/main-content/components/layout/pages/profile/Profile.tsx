import React, {FC} from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts";
import { IPost } from "../../../../models/post.interface";
import { IAction } from "../../../../../../utils/models/action.interface";

interface IProfileProps {
  postsData: IPost[]
  dispatch: (action: IAction) => void
}

const Profile: FC<IProfileProps> = ({ postsData, dispatch}) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData} dispatch={dispatch}/>
    </div>
  );
};

export default Profile;
