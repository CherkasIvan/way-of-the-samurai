import {FC} from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts";
import { IPost } from "../../../../models/post.interface";
import { IAction } from "../../../../../../utils/models/action.interface";

interface IProfileProps {
  postsData: IPost[]
}

const Profile: FC<IProfileProps> = ({ postsData }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData}/>
    </div>
  );
};

export default Profile;
