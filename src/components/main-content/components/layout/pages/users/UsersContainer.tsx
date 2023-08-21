import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'

import { IUser } from '../../../../models/user.interface'
import React from 'react'
import Users from './Users'
import {
  SetUsersAC,
  SetTotalUsersCountAC,
  UserUnsubscribeAC,
  UserSubscribeAC,
  SetCurrentPageAC,
  SetPreloaderAC,
  SetPreloaderInProgressAC,
} from '../../../../../../redux/actions/actions'
import { getUsers } from '../../../../../../api/api'

interface IUsersContainerProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
  setUsers: (users: IUser[]) => void
  unsubscribeUser: (userId: number) => void
  subscribeUser: (userId: number) => void
  changePage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleInProgress: (isFetching: boolean, userId: number) => void
}

class UsersContainer extends React.Component<IUsersContainerProps> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    const users = '/users'
    const page = `?page=${this.props.currentPage}`
    const pageSize = `&count=${this.props.pageSize}`
    getUsers(users, page, pageSize).then((response) => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
      this.props.toggleIsFetching(false)
    })
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

export default connect(mapStateToProps, {
  setUsers: SetUsersAC,
  setTotalUsersCount: SetTotalUsersCountAC,
  unsubscribeUser: UserUnsubscribeAC,
  subscribeUser: UserSubscribeAC,
  changePage: SetCurrentPageAC,
  toggleIsFetching: SetPreloaderAC,
  toggleInProgress: SetPreloaderInProgressAC,
})(UsersContainer)
