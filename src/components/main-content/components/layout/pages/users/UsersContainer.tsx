import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'

import { IUser } from '../../../../models/user.interface'
import React from 'react'
import Users from './Users'
import {
  SetUsersActionCreator,
  SetTotalUsersCountActionCreator,
  UserUnsubscribeActionCreator,
  UserSubscribeActionCreator,
  SetCurrentPageActionCreator,
  SetPreloaderActionCreator,
} from '../../../../../../redux/actions/actions'
import { getUsers } from '../../../../../../api/api'

interface IUsersContainerProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  setUsers: (users: IUser[]) => void
  unsubscribeUser: (userId: number) => void
  subscribeUser: (userId: number) => void
  changePage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
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
  }
}

export default connect(mapStateToProps, {
  setUsers: SetUsersActionCreator,
  setTotalUsersCount: SetTotalUsersCountActionCreator,
  unsubscribeUser: UserUnsubscribeActionCreator,
  subscribeUser: UserSubscribeActionCreator,
  changePage: SetCurrentPageActionCreator,
  toggleIsFetching: SetPreloaderActionCreator,
})(UsersContainer)
