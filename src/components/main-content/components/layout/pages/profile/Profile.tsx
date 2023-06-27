import React, {FC} from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts";
import { IDialog } from "../../../../models/dialog.interface";

interface IProfileProps {
  postsData: IDialog[]
}

const Profile: FC<IProfileProps> = ({ postsData }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData}></Posts>
    </div>
  );
};

export default Profile;
