import {FC} from "react";
import { IPost } from "../../../../models/post.interface";
import Profile from "./Profile";
import { AddPostActionCreator, UpdatePostActionCreator } from "../../../../../../redux/actions";
import store from "../../../../../../redux-store/redux-store";

interface IProfileContainerProps {
  postsData: IPost[]
}

const updatePostHeandler = (text: string) => {
  let action = UpdatePostActionCreator(text)
  store.dispatch(action)
}

const addPostHeandler = () => {
  let action = AddPostActionCreator()
  store.dispatch(action)
}

const ProfileContainer: FC<IProfileContainerProps> = ({ postsData }) => {
  return (<Profile postsData={postsData} updatePostHeandler={updatePostHeandler} addPostHeandler={addPostHeandler}/>
  );
};

export default ProfileContainer;
