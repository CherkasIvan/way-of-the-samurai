import { FC, useState } from 'react';
import classes from './ActualProfile.module.scss';
import ProfileLogo from '../../../../../../../../assets/img/default-user.png';
import Preloader from '../../../../../../../shared/preloader/Preloader';
import { IProfileInformation } from '../../../../../../models/profile-information.interface';
import ProfileData from '../profileData/ProfileData';
import ProfileDataForm from '../profileDataForm/ProfileDataForm';

interface IActualProfileProps {
  myStatus: string;
  status: string;
  currentProfile: IProfileInformation | null;
  updateMyStatusTC: (message: string) => void;
  saveProfileTC: (formData: any) => void;
}

const ActualProfile: FC<IActualProfileProps> = ({
  currentProfile,
  myStatus,
  saveProfileTC,
  status
}) => {
  const owner = currentProfile?.userId === 29840;
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData: any) => {
    saveProfileTC(formData);
    setEditMode(false);
  };

  return currentProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img
          src={
            currentProfile.photos.small ||
            currentProfile.photos.large ||
            ProfileLogo
          }
          alt={ProfileLogo}
          className={classes.ProfileImg}></img>

        {editMode ? (
          <ProfileDataForm
            initialValues={currentProfile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            status={owner ? myStatus : status}
            currentProfile={currentProfile}
            owner={owner}
            toEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default ActualProfile;
