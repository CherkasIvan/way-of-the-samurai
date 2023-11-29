import classes from './ProfileDataForm.module.scss';
import { reduxForm } from 'redux-form';
import {
  CreateField,
  Input,
  Textarea
} from '../../../../../../../shared/forms-controls/FormsControls';

const ProfileDataForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button type="submit">Save</button>
      </div>
      <div>
        <span className={classes.fullName}>
          <b>Fullname: </b> {CreateField('Full name', 'fullName', [], Input)}
        </span>
      </div>

      <div>
        <span className={classes.lookingForAJob}>
          <b>Looking for a job: </b>
          {CreateField('Looking for a job', 'lookingForAJob', [], Input, {
            type: 'checkbox'
          })}
        </span>
      </div>

      <div>
        <span className={classes.lookingForAJobDescription}>
          <b>My professional skills: </b>
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

const ProfileDataReduxForm = reduxForm({ form: 'profileForm' })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
