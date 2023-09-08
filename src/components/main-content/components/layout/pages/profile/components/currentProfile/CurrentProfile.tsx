import React, { FC } from 'react';
import classes from './CurrentProfile.module.scss';
import ProfileLogo from '../../../../../../../../assets/img/avatar.jpg';
import Preloader from '../../../../../../../shared/preloader/Preloader';
import ProfileStatus from '../profileStatus/ProfileStatus';
import { IProfilePage } from '../../../../../../../../utils/models/profile-page.interface';

interface ICurrentProfileProps {
  profilePage: IProfilePage;
  updateMyStatusTC: (message: string) => any;
}

const CurrentProfile: FC<ICurrentProfileProps> = ({
  profilePage,
  updateMyStatusTC
}) => {
  return profilePage.currentProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img
          src={ProfileLogo}
          alt={ProfileLogo}
          className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>
          {profilePage.currentProfile.fullName}
        </span>
        <ProfileStatus
          status={profilePage.status || 'Click here for change status'}
          updateMyStatusTC={updateMyStatusTC}
        />
      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default CurrentProfile;
