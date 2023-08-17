import { FC } from 'react'
import classes from './Profile.module.scss'
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface'
import PostsContainer from './components/posts/PostsContainer'
import CurrentProfile from './components/currentProfile/CurrentProfile'
import { IUsersPage } from '../../../../../../utils/models/users-page.interface'

interface IProfileProps {
  profilePage: IProfilePage
  updatePostHandler: (text: string) => void
  addPostHandler: (text: string) => void
  toggleIsFetching: (isFetching: boolean) => void
}

const Profile: FC<IProfileProps> = ({ profilePage, updatePostHandler, addPostHandler }) => {
  return (
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
