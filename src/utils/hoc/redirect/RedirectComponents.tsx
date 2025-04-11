import React from 'react';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../enums/active-routes.enum';
import { IState } from '../../../components/main-content/models/state.interface';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state: IState) => {
  return { isAuth: state.auth.isAuth };
};

export const withAuthRedirect = (Component: React.ElementType) => {
  const RedirectComponent: React.FC<any> = (props) => {
    if (!props.isAuth) {
      return <Navigate to={ActiveRoutes.LOGIN} />;
    }
    return <Component {...props} />;
  };

  const RedirectedAuth = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return RedirectedAuth;
};
