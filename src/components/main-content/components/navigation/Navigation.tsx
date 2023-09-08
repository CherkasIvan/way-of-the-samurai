import classes from './Navigation.module.scss';
import { Routes } from '../../../../utils/data/routs';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

interface INavigationProps {
  isAuth: boolean;
}

const Navigation: FC<INavigationProps> = (isAuth) => {
  const listItems = Routes.map((el, index) => (
    <li
      className={classes.navigationItem}
      key={index}>
      <NavLink
        className={({ isActive }) => {
          const linkClasses = [classes.navigationItemLink];
          if (isActive) linkClasses.push(classes.active);
          return linkClasses.join(' ');
        }}
        to={el.href}>
        {el.label}
      </NavLink>
    </li>
  ));

  return isAuth ? (
    <>
      <nav>
        <ul className={classes.navigationList}>{listItems}</ul>
      </nav>
    </>
  ) : (
    <>
      <nav>
        <ul className={classes.navigationList}>
          {listItems.splice(1, 1).shift()}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
