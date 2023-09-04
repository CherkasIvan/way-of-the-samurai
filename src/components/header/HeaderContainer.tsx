import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { IState } from '../main-content/models/state.interface';
import { getMeTC, logoutTC } from '../../redux/thunk/auth-thunk';

export interface IHeaderContainerProps {
  isAuth: boolean;
  login: string | null;
  getMeTC: () => any;
  logoutTC: () => any;
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  componentDidMount(): void {
    this.props.getMeTC();
  }

  render(): React.ReactNode {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: IState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  getMeTC: getMeTC,
  logoutTC: logoutTC,
})(HeaderContainer);
