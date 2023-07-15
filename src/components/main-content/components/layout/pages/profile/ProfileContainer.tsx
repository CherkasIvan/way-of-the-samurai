import {FC} from "react";
import { IPost } from "../../../../models/post.interface";
import Profile from "./Profile";

interface IProfileContainerProps {
  postsData: IPost[]
}

const ProfileContainer: FC<IProfileContainerProps> = ({ postsData }) => {
  return (<Profile postsData={postsData}/>
  );
};

export default ProfileContainer;
