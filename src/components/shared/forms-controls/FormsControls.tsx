import React from 'react';
import styles from './FormsControls.module.scss';

export const FormControl = (props: any) => {
  const hasError = props.meta.error && props.meta.touched;
  return (
    <div className={styles.FormControl}>
      <div className={hasError && styles.FormControlError}>
        {props.children}
      </div>
      {hasError && <span>{props.meta.error}</span>}
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
