import classes from './ProfileDataForm.module.scss';
import { Field, reduxForm } from 'redux-form';
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
          <Field
            type="checkbox"
            component={'input'}
            name={'lookingForAJob'}
          />
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

      <div>
        <span className={classes.contacts}>
          <b>Contacts: </b>
          {Object.keys(props.initialValues.contacts).map((key: string) => {
            return (
              <div key={key}>
                <b>
                  {key}: {CreateField(key, `contacts.${key}`, [], Input)}
                </b>
              </div>
            );
          })}
        </span>
      </div>

      {props.error && <div>{props.error}</div>}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
