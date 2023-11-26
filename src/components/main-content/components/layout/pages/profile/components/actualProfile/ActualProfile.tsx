import { FC } from 'react';
import classes from './ActualProfile.module.scss';
import ProfileLogo from '../../../../../../../../assets/img/default-user.png';
import Preloader from '../../../../../../../shared/preloader/Preloader';
import { IProfileInformation } from '../../../../../../models/profile-information.interface';

interface IActualProfileProps {
  currentProfile: IProfileInformation | null;
  updateMyStatusTC: (message: string) => void;
}

// DЫНЕСТИ В НОВУЮ КОМПОНЕНТУ
//

export const Contact = (contactTitle:any, contactValue:any) => {
  return <div>
            <b>{contactTitle}: </b> 
            <span>{contactValue}</span>
        </div>
      }
      
// DЫНЕСТИ В НОВУЮ КОМПОНЕНТУ
//


const ActualProfile: FC<IActualProfileProps> = ({
  currentProfile,
}) => {
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

          <div>
            <span className={classes.lookingForAJob}><b>Lookung for a job: </b> {currentProfile.lookingForAJob ? 'yes' : 'no'}</span>
          </div>

          {currentProfile.lookingForAJob && <div>
            <span className={classes.lookingForAJob}><b>My professional skills: </b> {currentProfile.lookingForAJobDescription}</span>
          </div>}

          <div>
            <span className={classes.lookingForAJob}><b>About me: </b> {currentProfile.aboutMe}</span>
          </div>

          <div>
              <span className={classes.lookingForAJob}><b>Contacts: </b>{Object.keys(currentProfile.contacts).map((key:string) => {
              return  <Contact key={key} contactTitle={key} contactValue={key}/>
              }
            )}</span>
          </div>

      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  );
};

export default ActualProfile;


