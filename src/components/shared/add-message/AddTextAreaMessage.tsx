import React, { FC, useRef } from 'react'
import classes from './AddTextAreaMessage.module.scss'
import { Field, reduxForm } from 'redux-form'

const AddTextAreaMessage = (props: {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}) => {
  return (
    <form className={classes.AddPostContainer} onSubmit={props.handleSubmit}>
      <Field
        type='textarea'
        placeholder={'ADD MESSAGE'}
        name={'newMessageBody'}
        component={'textarea'}
      ></Field>
      <button>Add new message</button>
    </form>
  )
}

const AddTextAreaMessageReduxForm = reduxForm({ form: 'addTextAreaMessage' })(AddTextAreaMessage)
export default AddTextAreaMessageReduxForm
