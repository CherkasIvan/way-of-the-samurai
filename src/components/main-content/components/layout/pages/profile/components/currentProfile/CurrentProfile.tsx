import React, { FC } from 'react'
import classes from './CurrentProfile.module.scss'
import ProfileLogo from '../../../../../../../../assets/img/avatar.jpg'
import { IProfileInformation } from '../../../../../../models/profile-information.interface'
import Preloader from '../../../../../../../shared/preloader/Preloader'

interface ICurrentProfileProps {
  currentProfile: IProfileInformation
}

const CurrentProfile: FC<ICurrentProfileProps> = ({ currentProfile }) => {
  return currentProfile ? (
    <div className={classes.ProfileContainer}>
      <div className={classes.UserContainer}>
        <img src={ProfileLogo} alt={ProfileLogo} className={classes.ProfileImg}></img>
        <span className={classes.ProfileName}>{currentProfile.fullName}</span>
      </div>
    </div>
  ) : (
    <Preloader isFetching={true} />
  )
}

export default CurrentProfile
