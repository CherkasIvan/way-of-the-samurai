import Header from './Header';
import { connect } from 'react-redux';
import { IState } from '../main-content/models/state.interface';
import { logoutTC } from '../../redux/thunk/auth-thunk';

const mapStateToProps = (state: IState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {
  logoutTC: logoutTC
})(Header);
