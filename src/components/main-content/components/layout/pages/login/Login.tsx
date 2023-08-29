import React, { FC } from 'react'
import styles from './Login.module.scss'
import LoginReduxForm from './components/LoginForm'
import { LoginFormData } from '../../../../models/login-form-data.interface'

const Login = () => {
const onSubmit = (formData:any) =>{
  
}

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login
