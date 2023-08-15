import { FC } from 'react'
import classes from './Profile.module.scss'
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface'
import Posts from './components/posts/Posts'
import CurrentProfileClassContainer from './components/currentProfile/CurrentProfileClassContainer'

interface IProfileProps {
  profilePage: IProfilePage
  updatePostHandler: (text: string) => void
  addPostHandler: (text: string) => void
  toggleIsFetching: (isFetching: boolean) => void
}

const Profile: FC<IProfileProps> = ({
  profilePage,
  updatePostHandler,
  addPostHandler,
  toggleIsFetching,
}) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.CurrentProfile}>
        <CurrentProfileClassContainer
          profilePage={profilePage}
          userId={2}
          toggleIsFetching={toggleIsFetching}
        />
      </div>

      <Posts
        postsData={profilePage.posts}
        updatePostHandler={updatePostHandler}
        addPostHandler={addPostHandler}
      />
    </div>
  )
}

export default Profile
