import styles from './FormsControls.module.scss';
import { Field } from 'redux-form';

export const FormControl = (props: any) => {
  const hasError = props.meta.error && props.meta.touched;
  return (
    <div className={styles.FormControl}>
      <div className={hasError ? styles.FormControlError : undefined}>
        {props.children}
      </div>
      {hasError ? <span>{props.meta.error}</span> : undefined}
    </div>
  );
};

export const Textarea = (props: any) => {
  return (
    <FormControl {...props}>
      <textarea
        {...props.input}
        placeholder={props.placeholder}></textarea>
    </FormControl>
  );
};

export const Input = (props: any) => {
  return (
    <FormControl {...props}>
      <input
        {...props.input}
        placeholder={props.placeholder}></input>
    </FormControl>
  );
};

export const CreateField = (
  placeholder: string,
  name: string,
  validators: any[],
  component: any,
  props = {},
  text = ''
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
    {text}
  </div>
);
