import Profile from './Profile'
import { AddPostActionCreator, UpdatePostActionCreator } from '../../../../../../redux/actions'
import { IState } from '../../../../models/state.interface'
import { connect } from 'react-redux'

const mapStateToProps = (state: IState) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
  }
}

export default connect(mapStateToProps, {
  updatePostHandler: UpdatePostActionCreator,
  addPostHandler: AddPostActionCreator,
})(Profile)
