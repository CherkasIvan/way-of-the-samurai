import React, { FC } from 'react';
import classes from './ProfileInfo.module.scss';
import profileLogo from '../../../../../../../../assets/img/avatar.jpg';

interface IProfileInfoProps {
  message: string;
  name: string;
}

const ProfileInfo: FC<IProfileInfoProps> = ({ message, name }) => {
  return (
    <div className={classes.ProfileContainer}>
      <div className={classes.userContainer}>
        <img
          src={profileLogo}
          alt={profileLogo}
          className={classes.ProfileImg}
        ></img>
        <span className={classes.ProfileName}>{name}</span>
      </div>
      <p className={classes.ProfileText}>{message}</p>
    </div>
  );
};

export default ProfileInfo;
