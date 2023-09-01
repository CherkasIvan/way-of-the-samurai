import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import { IUser } from '../../../../models/user.interface'
import React from 'react'
import Users from './Users'
import { SetUsersAC, SetCurrentPageAC } from '../../../../../../redux/actions/actions'
import {
  getUsersTC,
  subscribeUsersTC,
  unsubscribeUsersTC,
} from '../../../../../../redux/thunk/users-thunk'
import { withAuthRedirect } from '../../../../../shared/redirect/RedirectComponents'
import { compose } from '@reduxjs/toolkit'
import { getProfileTC } from '../../../../../../redux/thunk/profile-thunk'
import { WithRouter } from '../../../../../shared/withRouter/WithRouter'
import ProfileClassContainer from '../profile/ProfileClassContainer'

interface IUsersContainerProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  isAuth: boolean
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
  setUsers: (users: IUser[]) => void
  changePage: (pageNumber: number) => void
  getUsersTC: (users: string, page: string, pageSize: string) => any
  subscribeUsersTC: (userId: number) => any
  unsubscribeUsersTC: (userId: number) => any
}

class UsersContainer extends React.Component<IUsersContainerProps> {
  componentDidMount(): void {
    const users = '/users'
    const page = `?page=${this.props.currentPage}`
    const pageSize = `&count=${this.props.pageSize}`
    this.props.getUsersTC(users, page, pageSize)
  }

  render(): React.ReactNode {
    return <Users {...this.props} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default compose(
  connect(mapStateToProps, {
    setUsers: SetUsersAC,
    changePage: SetCurrentPageAC,
    getUsersTC: getUsersTC,
    subscribeUsersTC: subscribeUsersTC,
    unsubscribeUsersTC: unsubscribeUsersTC,
  }),
  withAuthRedirect,
)(UsersContainer)
