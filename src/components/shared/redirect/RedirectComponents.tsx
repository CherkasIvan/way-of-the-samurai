import { Navigate } from 'react-router-dom'
import { ActiveRoutes } from '../../../utils/enums/active-routes.enum'
import React from 'react'
import { IState } from '../../main-content/models/state.interface'
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = (state: IState) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export const withAuthRedirect = (Component: React.ElementType) => {
  class RedirectComponent extends React.Component<any> {
    render() {
      if (!this.props.isAuth) <Navigate to={ActiveRoutes.LOGIN} />
      return <Component {...this.props} />
    }
  }
  const RedirectedAuth = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return RedirectedAuth
}
