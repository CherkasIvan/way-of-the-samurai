import React, { FC } from 'react'
import styles from './LoginForm.module.scss'
import { Field, reduxForm } from 'redux-form'

const LoginForm= (props:any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type='text' placeholder={'LOGIN'} name={'login'} component={'input'}/>
      </div>
      <div>
        <Field type='password' placeholder={'PASSWORD'} name={'password'} component={'input'}/>
      </div>
      <div>
        <Field type='checkbox' component={'input'} name={'rememberMe'}/>
        <span>Remember me</span>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' }) (LoginForm)

export default LoginReduxForm
