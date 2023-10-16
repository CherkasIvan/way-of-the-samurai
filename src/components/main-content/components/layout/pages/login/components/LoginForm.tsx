import React, { FC } from 'react';
import styles from './LoginForm.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../../../../shared/forms-controls/FormsControls';
import {
  maxLengthCreator,
  requiredField
} from '../../../../../../../utils/validators/validators';


const maxLength20 = maxLengthCreator(30);
const maxLength10 = maxLengthCreator(10);
const required = requiredField;

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder={'EMAIL'}
          name={'EMAIL'}
          component={Input}
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder={'PASSWORD'}
          name={'password'}
          typeof={'password'}
          component={Input}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          type="checkbox"
          component={'input'}
          name={'rememberMe'}
        />
        <span>Remember me</span>
      </div>
      {props.error ? (
        <div className={styles.Error}>{props.error}</div>
      ) : undefined}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
