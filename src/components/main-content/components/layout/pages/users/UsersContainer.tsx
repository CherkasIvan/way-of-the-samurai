import { connect } from 'react-redux'
import { IAction } from '../../../../../../utils/models/action.interface'
import { IState } from '../../../../models/state.interface'
import { SetCurrentPageActionCreator, SetTotalUsersCountActionCreator, SetUserActionCreator, UserSubscribeActionCreator, UserUnsubscribeActionCreator } from '../../../../../../redux/actions'
import { IUser } from '../../../../models/user.interface'
import UsersClass from './UsersClass'

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
  
  const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass)
  
  export default UsersContainer;