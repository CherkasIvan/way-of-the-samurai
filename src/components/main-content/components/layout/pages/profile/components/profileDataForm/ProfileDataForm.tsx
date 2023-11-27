import { FC } from 'react';
import classes from './ProfileDataForm.module.scss';
import { IProfileInformation } from '../../../../../../models/profile-information.interface';
import Contact from '../contact/Contact';

interface IProfileDataFormProps {
    currentProfile: IProfileInformation;
    owner:boolean;
    toEditMode: () => void
  }

const ProfileDataForm: FC<IProfileDataFormProps> = ({currentProfile ,owner, toEditMode}) => {
    return <form>
                {
                owner && <div>
                  <button 
                    type='button' 
                    onClick={toEditMode}>
                      Save
                  </button>
                </div>
              }
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
                  return  <Contact key={key} contactTitle={key} contactValue={currentProfile.contacts[key as keyof IProfileInformation]}/>
                  }
                )}</span>
              </div>
          </form>
  }

  export default ProfileDataForm;