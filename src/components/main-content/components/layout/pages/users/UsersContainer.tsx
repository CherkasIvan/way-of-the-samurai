import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { UpdateMessageActionCreator, AddMessageActionCreator } from '../../../../../../redux/actions'
import { IAction } from '../../../../../../utils/models/action.interface'
import { IState } from '../../../../models/state.interface'

let mapStateToProps = (state: IState) => {return {
    usersPage: state.usersPage
  }}
  let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
    return {
    }
  }
  
  const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
  
  export default UsersContainer;