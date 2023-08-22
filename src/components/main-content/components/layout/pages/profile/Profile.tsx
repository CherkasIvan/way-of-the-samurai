import { FC } from 'react'
import classes from './Profile.module.scss'
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface'
import PostsContainer from './components/posts/PostsContainer'
import CurrentProfile from './components/currentProfile/CurrentProfile'
import { Navigate } from 'react-router-dom'
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum'

interface IProfileProps {
  profilePage: IProfilePage
  isAuth: boolean
  updatePostHandler: (text: string) => void
  addPostHandler: (text: string) => void
}

const Profile: FC<IProfileProps> = ({ profilePage, updatePostHandler, addPostHandler, isAuth }) => {
  return !isAuth ? (
    <Navigate to={ActiveRoutes.LOGIN} />
  ) : (
    <div className={classes.profileContainer}>
      <div className={classes.CurrentProfile}>
        <CurrentProfile currentProfile={profilePage.currentProfile} />
      </div>

      <PostsContainer
        postsData={profilePage.posts}
        updatePostHandler={updatePostHandler}
        addPostHandler={addPostHandler}
      />
    </div>
  )
}

export default Profile
