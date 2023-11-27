import { FC, useState } from 'react';
import classes from './ActualProfile.module.scss';
import ProfileLogo from '../../../../../../../../assets/img/default-user.png';
import Preloader from '../../../../../../../shared/preloader/Preloader';
import { IProfileInformation } from '../../../../../../models/profile-information.interface';
import ProfileDataForm from '../profileDataForm/ProfileDataForm';
import ProfileData from '../profileData/ProfileData';

interface IActualProfileProps {
  currentProfile: IProfileInformation | null;
  updateMyStatusTC: (message: string) => void;
}


const ActualProfile: FC<IActualProfileProps> = ({
  currentProfile,
}) => {
  const owner = currentProfile?.userId === 29840
  const [editMode, setEditMode]= useState(false)

  return currentProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img
          src={currentProfile.photos.small 
            || currentProfile.photos.large
            || ProfileLogo}
          alt={ProfileLogo}
          className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>
          {currentProfile.fullName}
        </span>

          { 
          editMode ? <ProfileDataForm currentProfile={currentProfile} owner={owner} toEditMode={() => setEditMode(false)}/> :
          <ProfileData currentProfile={currentProfile} owner={owner} toEditMode={() => setEditMode(true)}/>
          }

      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default ActualProfile;
