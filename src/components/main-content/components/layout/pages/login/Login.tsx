import React, { FC } from 'react'
import styles from './Login.module.scss'
import LoginReduxForm from './components/LoginForm'

const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
