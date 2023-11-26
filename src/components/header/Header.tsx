import { FC } from 'react';
import classes from './Header.module.scss';
import { ActiveRoutes } from '../../utils/enums/active-routes.enum';
import { NavLink } from 'react-router-dom';
import CurrentProfile from './currentProfile/CurrentProfile';
import { IProfilePage } from '../../utils/models/profile-page.interface';

interface IHeaderProps {
  profilePage: IProfilePage;
  isAuth: boolean;
  logoutTC: () => void;
  updateMyStatusTC: (message: string) => void;
  savePhotoTC: (photo:any) => void
  login: any ;
  userId: any;
}

const Header: FC<IHeaderProps> = ({ isAuth, logoutTC, savePhotoTC, login, userId, profilePage, updateMyStatusTC }) => {
  return (
    <header className={classes.Container}>
      <img
        src={require('../../assets/img/logo.jpg')}
        alt="logo.jpg"
      />

      <div className={classes.LoginBlock}>
        {isAuth ? (
          <div className={classes.isLogin}>
              <button className={classes.LogoutButton} onClick={logoutTC}>
                Logout
              </button>
              <CurrentProfile
              profilePage={profilePage}
              updateMyStatusTC={updateMyStatusTC}
              savePhotoTC={savePhotoTC}
              />  
          </div>
        ) : (
          <NavLink to={ActiveRoutes.LOGIN}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
