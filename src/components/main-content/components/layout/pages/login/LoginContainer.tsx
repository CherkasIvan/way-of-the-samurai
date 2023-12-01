import { connect } from 'react-redux';
import { IState } from '../../../../models/state.interface';
import Login from './Login';
import { loginTC } from '../../../../../../redux/thunk/auth-thunk';

const mapStateToProps = (state: IState) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  };
};

export default connect(mapStateToProps, {
  loginUser: loginTC
})(Login);
