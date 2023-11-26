import { FC } from 'react';
import classes from './ActualProfile.module.scss';
import ProfileLogo from '../../../../../../../../assets/img/default-user.png';
import Preloader from '../../../../../../../shared/preloader/Preloader';
import { IProfilePage } from '../../../../../../../../utils/models/profile-page.interface';

interface IActualProfileProps {
  profilePage: IProfilePage;
  updateMyStatusTC: (message: string) => void;
}

const ActualProfile: FC<IActualProfileProps> = ({
  profilePage,
}) => {
  return profilePage.currentProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img
          src={profilePage.currentProfile.photos.small 
            || profilePage.currentProfile.photos.large
            || ProfileLogo}
          alt={ProfileLogo}
          className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>
          {profilePage.currentProfile.fullName}
        </span>
        <span>{profilePage.status}</span>
      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default ActualProfile;
