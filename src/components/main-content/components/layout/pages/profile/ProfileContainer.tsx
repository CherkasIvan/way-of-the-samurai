import Profile from "./Profile";
import { AddPostActionCreator, UpdatePostActionCreator } from "../../../../../../redux/actions";
import { IState } from "../../../../models/state.interface";
import { IAction } from "../../../../../../utils/models/action.interface";
import { connect } from "react-redux";


let mapStateToProps = (state: IState) => {return {
  profilePage: state.profilePage,
  newPostText: state.profilePage.newPostText
}}

let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
  return {
    updatePostHandler: (text: string) => {
      let action = UpdatePostActionCreator(text)
      dispatch(action)
    },
    addPostHandler: (text: string) => {    
      let action = AddPostActionCreator(text)
      dispatch(action)
  }
}
}
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)

export default ProfileContainer;
