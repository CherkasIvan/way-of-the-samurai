import { FC } from 'react';
import classes from './Header.module.scss';
import { ActiveRoutes } from '../../utils/enums/active-routes.enum';
import { NavLink } from 'react-router-dom';
import CurrentProfile from './currentProfile/CurrentProfile';
import { IProfileInformation } from '../main-content/models/profile-information.interface';

interface IHeaderProps {
  myProfile: IProfileInformation | null;
  isAuth: boolean;
  logoutTC: () => void;
  updateMyStatusTC: (message: string) => void;
  savePhotoTC: (photo: Blob) => void;
  myStatus: string;
}

const Header: FC<IHeaderProps> = ({
  isAuth,
  logoutTC,
  savePhotoTC,
  myProfile,
  updateMyStatusTC,
  myStatus
}) => {
  return (
    <header className={classes.Container}>
      <img
        src={require('../../assets/img/logo.jpg')}
        alt="logo.jpg"
      />

      <div className={classes.LoginBlock}>
        {isAuth ? (
          <div className={classes.isLogin}>
            <button
              className={classes.LogoutButton}
              onClick={logoutTC}>
              Logout
            </button>
            <CurrentProfile
              myStatus={myStatus}
              myProfile={myProfile}
              updateMyStatusTC={updateMyStatusTC}
              savePhotoTC={savePhotoTC}
            />
          </div>
        ) : (
          <NavLink to={ActiveRoutes.LOGIN}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
