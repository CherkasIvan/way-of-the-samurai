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
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};

export const Input = (props: any) => {
  const { input, restProps } = props;
  return (
    <FormControl {...props}>
      <input
        {...input}
        {...restProps}
      />
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
