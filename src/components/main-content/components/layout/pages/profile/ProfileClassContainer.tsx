import Profile from './Profile';
import { AddPostAC } from '../../../../../../redux/actions/actions';
import classes from './Profile.module.scss';
import { IState } from '../../../../models/state.interface';
import { connect } from 'react-redux';
import React from 'react';
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface';
import { WithRouter } from '../../../../../shared/withRouter/WithRouter';
import {
  getProfileStatusTC,
  getProfileTC,
  updateMyStatusTC,
} from '../../../../../../redux/thunk/profile-thunk';
import { withAuthRedirect } from '../../../../../shared/redirect/RedirectComponents';

interface IProfileClassContainerProps {
  profilePage: IProfilePage;
  isFetching: boolean;
  isAuth: boolean;
  authorizedUserId: number;
  addPostHandler: (text: string) => void;
  router: any;
  getProfileTC: (router: any) => any;
  getProfileStatusTC: (router: any) => any;
  updateMyStatusTC: (message: string) => any;
}

class ProfileClassContainer extends React.Component<IProfileClassContainerProps> {
  componentDidMount(): void {
    this.props.getProfileTC(this.props.router);
    this.props.getProfileStatusTC(this.props.router);
  }

  render(): React.ReactNode {
    return (
      <div className={classes.profileContainer}>
        <Profile {...this.props} profilePage={this.props.profilePage} />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
    status: state.profilePage.status,
    isFetching: state.usersPage.isFetching,
    authorizedUserId: state.auth.userId,
  };
};

// SHOULD BE IMPLEMENTED
// compose(
//   connect(mapStateToProps, {
//     updatePostHandler: UpdatePostAC,
//     addPostHandler: AddPostAC,
//     getProfileTC: getProfileTC,
//   }),
//   WithRouter,
//   withAuthRedirect,
// )(ProfileClassContainer)

const AuthRedirectComponent = withAuthRedirect(ProfileClassContainer);

const WithUrlDataContainerComponent = WithRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  addPostHandler: AddPostAC,
  getProfileTC: getProfileTC,
  getProfileStatusTC: getProfileStatusTC,
  updateMyStatusTC: updateMyStatusTC,
})(WithUrlDataContainerComponent);
