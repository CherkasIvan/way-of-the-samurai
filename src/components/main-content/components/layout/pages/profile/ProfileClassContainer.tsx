import Profile from './Profile'
import { AddPostAC, UpdatePostAC } from '../../../../../../redux/actions/actions'
import classes from './Profile.module.scss'
import { IState } from '../../../../models/state.interface'
import { connect } from 'react-redux'
import React from 'react'
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface'
import { withRouter } from '../../../../../../utils/functions/withRouter'
import { getProfileTC } from '../../../../../../redux/thunk/profile-thunk'

interface IProfileClassContainerProps {
  profilePage: IProfilePage
  isFetching: boolean
  isAuth: boolean
  addPostHandler: (text: string) => void
  updatePostHandler: (text: string) => void
  router: any
  getProfileTC: (router: any) => any
}

class ProfileClassContainer extends React.Component<IProfileClassContainerProps> {
  componentDidMount(): void {
    this.props.getProfileTC(this.props.router)
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
    isAuth: state.auth.isAuth,
  }
}

const withUrlDataContainerComponent = withRouter(ProfileClassContainer)

export default connect(mapStateToProps, {
  updatePostHandler: UpdatePostAC,
  addPostHandler: AddPostAC,
  getProfileTC: getProfileTC,
})(withUrlDataContainerComponent)
