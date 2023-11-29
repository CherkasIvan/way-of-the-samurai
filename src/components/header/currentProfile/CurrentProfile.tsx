import { FC, useState } from 'react';
import classes from './CurrentProfile.module.scss';
import ProfileLogo from '../../../assets/img/default-user.png';
import Preloader from '../../shared/preloader/Preloader';
import ProfileStatusWithHooks from '../../main-content/components/layout/pages/profile/components/profileStatus/ProfileStatusWithHooks';
import { IProfileInformation } from '../../main-content/models/profile-information.interface';

interface ICurrentProfileProps {
  myStatus: string;
  myProfile: IProfileInformation | null;
  updateMyStatusTC: (message: string) => void;
  savePhotoTC: (photo: any) => void;
}

const CurrentProfile: FC<ICurrentProfileProps> = ({
  myStatus,
  myProfile,
  updateMyStatusTC,
  savePhotoTC
}) => {
  const [file, setFile] = useState(null);

  const uploadPhoto = () => {
    savePhotoTC(file);
    setFile(null);
  };

  const deletePhoto = () => {
    setFile(null);
  };

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  return myProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img
          src={myProfile.photos.small || myProfile.photos.large || ProfileLogo}
          alt={myProfile.photos.small || myProfile.photos.large || ProfileLogo}
          className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>{myProfile.fullName}</span>
        <ProfileStatusWithHooks
          status={myStatus || 'Click here for change status'}
          updateMyStatusTC={updateMyStatusTC}
        />
        <input
          className={classes.ChangeButtonName}
          type={'file'}
          onChange={onMainPhotoSelected}
        />

        {file && (
          <button
            className="uploadFileButton"
            onClick={uploadPhoto}>
            Upload photo
          </button>
        )}
        {file && (
          <button
            className="deleteFileButton"
            onClick={deletePhoto}>
            x
          </button>
        )}
      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default CurrentProfile;
