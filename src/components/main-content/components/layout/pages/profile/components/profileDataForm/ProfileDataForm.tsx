import { FC } from 'react';
import classes from './ProfileDataForm.module.scss';
import { IProfileInformation } from '../../../../../../models/profile-information.interface';
import Contact from '../contact/Contact';
import { reduxForm, InjectedFormProps, FormSubmitHandler } from 'redux-form';
import {
  CreateField,
  Input,
  Textarea
} from '../../../../../../../shared/forms-controls/FormsControls';

type FormValues = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
};

// Add the second generic argument to InjectedFormProps
interface IProfileDataFormProps {
  currentProfile: IProfileInformation | null;
  owner: boolean;
  toEditMode: () => void;
  onSubmit: any;
}

const ProfileDataForm: FC<IProfileDataFormProps> = ({
  currentProfile,
  owner,
  toEditMode,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      {owner && (
        <div>
          <button
            type="submit"
            onClick={toEditMode}>
            Save
          </button>
        </div>
      )}
      <div>
        <span className={classes.fullName}>
          {' '}
          {currentProfile?.fullName}
          <b>Fullname: </b> {CreateField('Full name', 'fullName', [], Input)}
        </span>
      </div>

      <div>
        <span className={classes.lookingForAJob}>
          {' '}
          {currentProfile?.lookingForAJob}
          <b>Looking for a job: </b>{' '}
          {CreateField('Looking for a job', 'lookingForAJob', [], Input, {
            type: 'checkbox'
          })}
        </span>
      </div>

      <div>
        <span className={classes.lookingForAJobDescription}>
          {' '}
          {currentProfile?.lookingForAJobDescription}
          <b>My professional skills: </b>{' '}
          {CreateField(
            'Looking for a job',
            'lookingForAJobDescription',
            [],
            Textarea
          )}
        </span>
      </div>

      <div>
        <span className={classes.aboutMe}>
          {' '}
          {currentProfile?.aboutMe}
          <b>About me: </b> {CreateField('About me', 'aboutMe', [], Textarea)}
        </span>
      </div>

      {/* <div>
<span className={classes.lookingForAJob}>
<b>Contacts: </b>{Object.keys(currentProfile.contacts).map((key:string) => {
return  <Contact key={key} contactTitle={key} contactValue={currentProfile.contacts[key as keyof IProfileInformation]}/>
}
)}</span>
</div> */}
    </form>
  );
};

// Pass the same generic arguments to reduxForm

export default ProfileDataForm;
