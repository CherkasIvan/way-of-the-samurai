import React from 'react';
import classes from './AddTextAreaMessage.module.scss';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  requiredField
} from '../../../utils/validators/validators';
import { Textarea } from '../forms-controls/FormsControls';

const maxLength20 = maxLengthCreator(20);
const required = requiredField;

const AddTextAreaMessage = (props: {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}) => {
  return (
    <form
      className={classes.AddPostContainer}
      onSubmit={props.handleSubmit}>
      <Field
        type="textarea"
        placeholder={'ADD MESSAGE'}
        name={'newMessageBody'}
        component={Textarea}
        validate={[required, maxLength20]}></Field>
      <button>Add new message</button>
    </form>
  );
};

const AddTextAreaMessageReduxForm = reduxForm({ form: 'addTextAreaMessage' })(
  AddTextAreaMessage
);
export default AddTextAreaMessageReduxForm;
