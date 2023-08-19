import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import {
  SetCurrentPageActionCreator,
  SetPreloaderActionCreator,
  SetTotalUsersCountActionCreator,
  SetUsersActionCreator,
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
      .get('https://social-network.samuraijs.com/api/1.0' + users + page + pageSize, {
        withCredentials: true,
        headers: { 'API-KEY': '74eec926-80fb-473b-9e58-ad114bf47bb4' },
      })
      .then((response) => {
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
