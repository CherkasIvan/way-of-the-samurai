import React, { FC } from 'react';
import classes from './Header.module.scss';
import { ActiveRoutes } from '../../utils/enums/active-routes.enum';
import { NavLink } from 'react-router-dom';

interface IHeaderProps {
  isAuth: boolean;
  login: string | null;
  logoutTC: () => any;
}

const Header: FC<IHeaderProps> = ({ isAuth, login, logoutTC }) => {
  return (
    <header className={classes.Container}>
      <img
        src={require('../../assets/img/logo.jpg')}
        alt="logo.jpg"
      />

      <div className={classes.LoginBlock}>
        {isAuth ? (
          <div>
            <button onClick={logoutTC}>Logout</button>
            <span>{login}</span>
          </div>
        ) : (
          <NavLink to={ActiveRoutes.LOGIN}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
