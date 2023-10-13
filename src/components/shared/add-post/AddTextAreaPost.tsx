import React from 'react';
import classes from './AddTextAreaPost.module.scss';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  requiredField
} from '../../../utils/validators/validators';
import { Textarea } from '../forms-controls/FormsControls';

const required = requiredField;
const maxLength10 = maxLengthCreator(10);

const AddTextAreaPost = (props: {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}) => {
  return (
    <form
      className={classes.AddPostContainer}
      onSubmit={props.handleSubmit}>
      <Field
        type="textarea"
        placeholder={'ADD POST'}
        name={'newPostBody'}
        component={Textarea}
        validate={[required, maxLength10]}></Field>
      <button>Add new post</button>
    </form>
  );
};

const AddTextAreaPostReduxForm = reduxForm({ form: 'newPostBody' })(
  AddTextAreaPost
);
export default AddTextAreaPostReduxForm;
