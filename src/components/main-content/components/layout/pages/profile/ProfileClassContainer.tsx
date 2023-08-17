import Profile from './Profile'
import {
  AddPostActionCreator,
  SetPreloaderActionCreator,
  SetProfileActionCreator,
  UpdatePostActionCreator,
} from '../../../../../../redux/actions'
import classes from './Profile.module.scss'
import { IState } from '../../../../models/state.interface'
import { connect } from 'react-redux'
import React from 'react'
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface'
import axios from 'axios'
import { IProfileInformation } from '../../../../models/profile-information.interface'

interface IProfileClassContainerProps {
  profilePage: IProfilePage
  isFetching: boolean
  addPostHandler: (text: string) => void
  updatePostHandler: (text: string) => void
  toggleIsFetching: (isFetching: boolean) => void
  setProfile: (profile: IProfileInformation) => void
}

class ProfileClassContainer extends React.Component<IProfileClassContainerProps> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    const profile = '/profile'
    const userId = 2
    axios
      .get('https://social-network.samuraijs.com/api/1.0' + profile + `/${userId}`)
      .then((response) => {
        console.log(response.data)
        this.props.setProfile(response.data)
        this.props.toggleIsFetching(false)
      })
  }

  render(): React.ReactNode {
    return (
      <div className={classes.profileContainer}>
        <Profile
          profilePage={this.props.profilePage}
          updatePostHandler={this.props.updatePostHandler}
          addPostHandler={this.props.addPostHandler}
          toggleIsFetching={this.props.toggleIsFetching}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
    isFetching: state.usersPage.isFetching,
  }
}

export default connect(mapStateToProps, {
  updatePostHandler: UpdatePostActionCreator,
  addPostHandler: AddPostActionCreator,
  toggleIsFetching: SetPreloaderActionCreator,
  setProfile: SetProfileActionCreator,
})(ProfileClassContainer)
