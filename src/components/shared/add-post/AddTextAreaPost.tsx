import React, { FC, useRef } from 'react'
import classes from './AddTextAreaPost.module.scss'
import { Field, reduxForm } from 'redux-form'

const AddTextAreaPost = (props: {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}) => {
  return (
    <form className={classes.AddPostContainer} onSubmit={props.handleSubmit}>
      <Field
        type='textarea'
        placeholder={'ADD POST'}
        name={'newPostBody'}
        component={'textarea'}
      ></Field>
      <button>Add new post</button>
    </form>
  )
}

const AddTextAreaPostReduxForm = reduxForm({ form: 'addTextAreaPost' })(AddTextAreaPost)
export default AddTextAreaPostReduxForm
