import { connect } from 'react-redux';
import { IState } from '../../../../models/state.interface';
import { AddMessageAC } from '../../../../../../redux/actions/actions';
import Login from './Login';
import { loginTC, logoutTC } from '../../../../../../redux/thunk/auth-thunk';

const mapStateToProps = (state: IState) => {
  return {
    loginPage: state.loginPage,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  addMessageTextHandler: AddMessageAC,
  loginUser: loginTC,
  logoutUser: logoutTC
})(Login);
