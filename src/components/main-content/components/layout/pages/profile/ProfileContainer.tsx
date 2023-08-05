import {FC} from "react";
import { IPost } from "../../../../models/post.interface";
import Profile from "./Profile";
import { AddPostActionCreator, UpdatePostActionCreator } from "../../../../../../redux/actions";
import store from "../../../../../../redux-store/redux-store";
import { IState } from "../../../../models/state.interface";
import { IAction } from "../../../../../../utils/models/action.interface";
import { connect } from "react-redux";


let mapStateToProps = (state: IState) => {return {
  profilePage: state.profilePage
}}
let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
  return {
    updatePostHeandler: (text: string) => {
      let action = UpdatePostActionCreator(text)
      dispatch(action)
    },
    addPostHeandler: () => {    
      let action = AddPostActionCreator()
      debugger
      dispatch(action)
  }
}
}
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)

export default ProfileContainer;
