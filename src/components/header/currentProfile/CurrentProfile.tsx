import { FC, useState } from 'react';
import classes from './CurrentProfile.module.scss';
import ProfileLogo from '../../../assets/img/default-user.png';
import Preloader from '../../shared/preloader/Preloader';
import { IProfilePage } from '../../../utils/models/profile-page.interface';
import ProfileStatusWithHooks from '../../main-content/components/layout/pages/profile/components/profileStatus/ProfileStatusWithHooks';

interface ICurrentProfileProps {
  profilePage: IProfilePage;
  updateMyStatusTC: (message: string) => void;
  savePhotoTC: (photo: any) => void
}

const CurrentProfile: FC<ICurrentProfileProps> = ({
  profilePage,
  updateMyStatusTC,
  savePhotoTC
}) => {
  const [file , setFile] = useState(null)

  const uploadPhoto = () => {
    savePhotoTC(file)
    setFile(null)
  }

  const deletePhoto = () => {
    setFile(null)
  }

  const onMainPhotoSelected = (e: any) => {
    if(e.target.files.length) {
      setFile(e.target.files[0])
    }
  }

  return profilePage.currentProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img
          src={profilePage.currentProfile.photos.small 
            || profilePage.currentProfile.photos.large
            || ProfileLogo}
          alt={profilePage.currentProfile.photos.small 
            || profilePage.currentProfile.photos.large
            || ProfileLogo}
          className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>
          {profilePage.currentProfile.fullName}
        </span>
        <ProfileStatusWithHooks
          status={profilePage.status || 'Click here for change status'}
          updateMyStatusTC={updateMyStatusTC}
        />
        <input className={classes.ChangeButtonName} type={'file'} onChange={onMainPhotoSelected}/>

        {file && <button className='uploadFileButton' onClick={uploadPhoto}>Upload photo</button>}
        {file && <button className='deleteFileButton' onClick={deletePhoto}>x</button>}
      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default CurrentProfile;
