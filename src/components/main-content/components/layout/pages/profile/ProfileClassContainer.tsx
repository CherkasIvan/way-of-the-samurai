import Profile from './Profile'
import {
  AddPostActionCreator,
  SetPreloaderActionCreator,
  UpdatePostActionCreator,
} from '../../../../../../redux/actions'
import { IState } from '../../../../models/state.interface'
import { connect } from 'react-redux'
import React from 'react'

// export default class ProfileClassContainer extends React.Component {
//   render(): React.ReactNode {
//     return (
//       <div>
//         <Profile
//           profilePage={this.props.profilePage}
//           updatePostHandler={this.props.updatePostHandler}
//           addPostHandler={this.props.addPostHandler}
//         ></Profile>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state: IState) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
  }
}

export default connect(mapStateToProps, {
  updatePostHandler: UpdatePostActionCreator,
  addPostHandler: AddPostActionCreator,
  toggleIsFetching: SetPreloaderActionCreator,
})(Profile)
