import Header from './Header';
import { connect } from 'react-redux';
import { IState } from '../main-content/models/state.interface';
import { logoutTC } from '../../redux/thunk/auth-thunk';
import { savePhotoTC, updateMyStatusTC } from '../../redux/thunk/profile-thunk';

const mapStateToProps = (state: IState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
  profilePage: state.profilePage,
});

export default connect(mapStateToProps, {
  logoutTC: logoutTC,
  updateMyStatusTC: updateMyStatusTC,
  savePhotoTC: savePhotoTC
})(Header);
