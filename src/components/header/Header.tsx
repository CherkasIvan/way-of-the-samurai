import React, { FC } from 'react'
import classes from './Header.module.scss'
import { ActiveRoutes } from '../../utils/enums/active-routes.enum'
import { NavLink } from 'react-router-dom'

export interface IHeaderProps {
  isAuth: boolean
  login: string | null
  authUser: (userId: number, email: string, login: string) => void
}

const Header: FC<IHeaderProps> = ({ isAuth, login }) => {
  console.log(isAuth)
  if (login) {
    console.log(login)
  }
  return (
    <header className={classes.Container}>
      <img src={require('../../assets/img/logo.jpg')} alt='logo.jpg' />

      <div className={classes.LoginBlock}>
        {isAuth ? <span>{login}</span> : <NavLink to={ActiveRoutes.LOGIN}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
