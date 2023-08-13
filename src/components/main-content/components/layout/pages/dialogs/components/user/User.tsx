import React, { FC } from 'react';
import classes from './User.module.scss';
import { NavLink } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../../../utils/enums/active-routes.enum';

export interface IUserProps {
  id: number;
  name: string;
}

const User: FC<IUserProps> = ({ id, name }) => {
  return (
    <div className={classes.userContainer}>
      <div className={classes.userName}>
        <div className={classes.userNameItem + ' ' + classes.active}>
          <NavLink to={ActiveRoutes.DIALOGS + '/' + id}>{name}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default User;
