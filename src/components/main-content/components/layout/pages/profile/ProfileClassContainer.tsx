import Profile from './Profile'
import {
  AddPostAC,
  SetPreloaderAC,
  SetProfileAC,
  UpdatePostAC,
} from '../../../../../../redux/actions/actions'
import classes from './Profile.module.scss'
import { IState } from '../../../../models/state.interface'
import { connect } from 'react-redux'
import React from 'react'
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface'
import { IProfileInformation } from '../../../../models/profile-information.interface'
import { withRouter } from '../../../../../../utils/functions/withRouter'
import { getProfile } from '../../../../../../api/api'

interface IProfileClassContainerProps {
  profilePage: IProfilePage
  isFetching: boolean
  addPostHandler: (text: string) => void
  updatePostHandler: (text: string) => void
  toggleIsFetching: (isFetching: boolean) => void
  setProfile: (profile: IProfileInformation) => void
  router: any
}

class ProfileClassContainer extends React.Component<IProfileClassContainerProps> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    const profile = '/profile'
    let userId = this.props.router.params.userId
    !userId
      ? (userId = 2)
      : getProfile(profile, userId).then((response) => {
          this.props.setProfile(response.data)
          this.props.toggleIsFetching(false)
        })
  }

  render(): React.ReactNode {
    return (
      <div className={classes.profileContainer}>
        <Profile {...this.props} profilePage={this.props.profilePage} />
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

const withUrlDataContainerComponent = withRouter(ProfileClassContainer)

export default connect(mapStateToProps, {
  updatePostHandler: UpdatePostAC,
  addPostHandler: AddPostAC,
  toggleIsFetching: SetPreloaderAC,
  setProfile: SetProfileAC,
})(withUrlDataContainerComponent)
