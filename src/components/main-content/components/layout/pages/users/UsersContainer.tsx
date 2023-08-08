import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { IAction } from '../../../../../../utils/models/action.interface'
import { IState } from '../../../../models/state.interface'
import { SetUserActionCreator, UserSubscribeActionCreator, UserUnsubscribeActionCreator } from '../../../../../../redux/actions'

let mapStateToProps = (state: IState) => {
  return {
    usersPage: state.usersPage
  }}
  let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
    return {
      setUsers: (users: any) => {
        let action = SetUserActionCreator(users)
        dispatch(action)
      },
      unsubscribeUser: (userId: number) => {    
        let action = UserUnsubscribeActionCreator(userId)
        dispatch(action)},
      subscribeUser: (userId: number) => {    
        let action = UserSubscribeActionCreator(userId)
        dispatch(action)},
    }
  }
  
  const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
  
  export default UsersContainer;