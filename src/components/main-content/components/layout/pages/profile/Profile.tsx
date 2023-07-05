import React, {FC} from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts";
import { IPost } from "../../../../models/post.interface";
import { IActionType } from "../../../../../../redux/store";

interface IProfileProps {
  postsData: IPost[]
  newPostText: string,
  newMessageText:string,
  dispatch: (action: IActionType) => void
}

const Profile: FC<IProfileProps> = ({ postsData, dispatch, newPostText, newMessageText }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData} newPostText={newPostText} newMessageText={newMessageText} dispatch={dispatch}/>
    </div>
  );
};

export default Profile;
