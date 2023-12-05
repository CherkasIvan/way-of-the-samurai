import Profile from './Profile';
import { AddPostAC } from '../../../../../../redux/actions/actions';
import classes from './Profile.module.scss';
import { IState } from '../../../../models/state.interface';
import { connect } from 'react-redux';
import React from 'react';
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface';
import { WithRouter } from '../../../../../../utils/hoc/withRouter/WithRouter';
import {
  getProfileStatusTC,
  getProfileTC,
  saveProfileTC,
  updateMyStatusTC
} from '../../../../../../redux/thunk/profile-thunk';
import { withAuthRedirect } from '../../../../../../utils/hoc/redirect/RedirectComponents';

interface IProfileClassContainerProps {
  profilePage: IProfilePage;
  isFetching: boolean;
  isAuth: boolean;
  authorizedUserId: number;
  status: string;
  myStatus: string;
  addPostHandler: (text: string) => void;
  router: any;
  getProfileTC: (router: any) => void;
  getProfileStatusTC: (router: any) => void;
  updateMyStatusTC: (message: string) => void;
  saveProfileTC: (formData: any) => void;
}

class ProfileClassContainer extends React.Component<IProfileClassContainerProps> {
  componentDidMount(): void {
    this.props.getProfileTC(this.props.router);
    this.props.getProfileStatusTC(this.props.router);
  }

  render(): React.ReactNode {
    return (
      <div className={classes.profileContainer}>
        <Profile
          {...this.props}
          profilePage={this.props.profilePage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
    status: state.profilePage.status,
    myStatus: state.profilePage.myStatus,
    isFetching: state.usersPage.isFetching,
    authorizedUserId: state.auth.userId
  };
};

const AuthRedirectComponent = withAuthRedirect(ProfileClassContainer);

const WithUrlDataContainerComponent = WithRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  addPostHandler: AddPostAC,
  getProfileTC: getProfileTC,
  getProfileStatusTC: getProfileStatusTC,
  updateMyStatusTC: updateMyStatusTC,
  saveProfileTC: saveProfileTC
})(WithUrlDataContainerComponent);
