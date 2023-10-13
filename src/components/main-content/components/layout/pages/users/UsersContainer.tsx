import { connect } from 'react-redux';
import { IState } from '../../../../models/state.interface';
import { IUser } from '../../../../models/user.interface';
import React from 'react';
import Users from './Users';
import {
  SetUsersAC,
  SetCurrentPageAC
} from '../../../../../../redux/actions/actions';
import {
  requestUsersTC,
  subscribeUsersTC,
  unsubscribeUsersTC
} from '../../../../../../redux/thunk/users-thunk';
import { withAuthRedirect } from '../../../../../shared/redirect/RedirectComponents';
import { compose } from '@reduxjs/toolkit';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../../../../../redux/selectors/users.selector';

interface IUsersContainerProps {
  users: IUser[];
  pageSize: number;
  totalUsersCount: number;
  isAuth: boolean;
  currentPage: number;
	portionSize: number;
  isFetching: boolean;
  followingInProgress: number[];
  setUsers: (users: IUser[]) => void;
  changePage: (pageNumber: number) => void;
  getUsersTC: (users: string, page: string, pageSize: string) => void;
  subscribeUsersTC: (userId: number) => void;
  unsubscribeUsersTC: (userId: number) => void;
}

class UsersContainer extends React.Component<IUsersContainerProps> {
  componentDidMount(): void {
    const users = '/users';
    const page = `?page=${this.props.currentPage}`;
    const pageSize = `&count=${this.props.pageSize}`;
    this.props.getUsersTC(users, page, pageSize);
  }

  render(): React.ReactNode {
    return <Users {...this.props} />;
  }
}

const mapStateToProps = (state: IState) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    setUsers: SetUsersAC,
    changePage: SetCurrentPageAC,
    getUsersTC: requestUsersTC,
    subscribeUsersTC: subscribeUsersTC,
    unsubscribeUsersTC: unsubscribeUsersTC
  }),
  withAuthRedirect
)(UsersContainer);
