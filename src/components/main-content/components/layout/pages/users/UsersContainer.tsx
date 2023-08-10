import { connect } from 'react-redux'
import { IAction } from '../../../../../../utils/models/action.interface'
import { IState } from '../../../../models/state.interface'
import { SetCurrentPageActionCreator, SetTotalUsersCountActionCreator, SetUserActionCreator, UserSubscribeActionCreator, UserUnsubscribeActionCreator } from '../../../../../../redux/actions'
import { IUser } from '../../../../models/user.interface'
import React from 'react'
import axios from 'axios'
import Users from './Users'


interface IUsersContainerProps {
  users: IUser[],
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  setUsers: (users: IUser[]) => void,
  unsubscribeUser: (userId: number) => void
  subscribeUser: (userId: number) => void
  changePage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<IUsersContainerProps> {
    componentDidMount(): void {
        const users = '/users'
        const page = `?page=${this.props.currentPage}`
        const pageSize = `&count=${this.props.pageSize}`
        axios.get('https://social-network.samuraijs.com/api/1.0' + users + page + pageSize).then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

  render(): React.ReactNode {
    return <Users users={this.props.users} 
    pageSize={this.props.pageSize} 
    totalUsersCount={this.props.totalUsersCount} 
    currentPage={this.props.currentPage} 
    setUsers={this.props.setUsers} 
    unsubscribeUser={this.props.unsubscribeUser} 
    subscribeUser={this.props.subscribeUser} 
    changePage={this.props.changePage} 
    setTotalUsersCount={this.props.setTotalUsersCount}/>
  }
}

let mapStateToProps = (state: IState) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }}
  let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
    return {
      setUsers: (users: IUser[]) => {
        let action = SetUserActionCreator(users)
        dispatch(action)
      },
      setTotalUsersCount: (totalUsersCount: number) => {
        let action = SetTotalUsersCountActionCreator(totalUsersCount)
        dispatch(action)
      },
      unsubscribeUser: (userId: number) => {    
        let action = UserUnsubscribeActionCreator(userId)
        dispatch(action)},
      subscribeUser: (userId: number) => {    
        let action = UserSubscribeActionCreator(userId)
        dispatch(action)},
      changePage: (pageNumber: number) => {    
        let action = SetCurrentPageActionCreator(pageNumber)
        dispatch(action)},
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
  
 