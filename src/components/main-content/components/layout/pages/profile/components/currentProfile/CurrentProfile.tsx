import React, { FC } from 'react'
import classes from './CurrentProfile.module.scss'
import ProfileLogo from '../../../../../../../../assets/img/avatar.jpg'

interface ICurrentProfileProps {
  fullName: string
}

const CurrentProfile: FC<ICurrentProfileProps> = ({ fullName }) => {
  return (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img src={ProfileLogo} alt={ProfileLogo} className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>{fullName}</span>
      </div>
    </div>
  )
}

export default CurrentProfile
