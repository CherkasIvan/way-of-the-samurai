import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import {
  SetCurrentPageActionCreator,
  SetPreloaderActionCreator,
  SetTotalUsersCountActionCreator,
  SetUserActionCreator,
  UserSubscribeActionCreator,
  UserUnsubscribeActionCreator,
} from '../../../../../../redux/actions'
import { IUser } from '../../../../models/user.interface'
import React from 'react'
import axios from 'axios'
import Users from './Users'

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
    axios
      .get('https://social-network.samuraijs.com/api/1.0' + users + page + pageSize)
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  render(): React.ReactNode {
    return (
      <>
        <Users
          users={this.props.users}
          isFetching={this.props.isFetching}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          setUsers={this.props.setUsers}
          unsubscribeUser={this.props.unsubscribeUser}
          subscribeUser={this.props.subscribeUser}
          changePage={this.props.changePage}
          toggleIsFetching={this.props.toggleIsFetching}
        />
      </>
    )
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
  setUsers: SetUserActionCreator,
  setTotalUsersCount: SetTotalUsersCountActionCreator,
  unsubscribeUser: UserUnsubscribeActionCreator,
  subscribeUser: UserSubscribeActionCreator,
  changePage: SetCurrentPageActionCreator,
  toggleIsFetching: SetPreloaderActionCreator,
})(UsersContainer)
