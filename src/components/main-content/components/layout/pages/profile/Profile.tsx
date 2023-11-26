import { FC } from 'react';
import classes from './Profile.module.scss';
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface';
import PostsContainer from './components/posts/PostsContainer';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum';
import ActualProfile from './components/actualProfile/ActualProfile';

export interface IProfileProps {
  profilePage: IProfilePage;
  isAuth: boolean;
  authorizedUserId: number;
  addPostHandler: (text: string) => void;
  updateMyStatusTC: (message: string) => void;
}

const Profile: FC<IProfileProps> = ({
  profilePage,
  addPostHandler,
  isAuth,
  authorizedUserId,
  updateMyStatusTC
}) => {
  return !isAuth && !authorizedUserId ? (
    <Navigate to={ActiveRoutes.LOGIN} />
  ) : (
    <div className={classes.profileContainer}>
      <div className={classes.CurrentProfile}>
        <ActualProfile
          currentProfile={profilePage.currentProfile}
          updateMyStatusTC={updateMyStatusTC}
        />
      </div>
      <PostsContainer
        postsData={profilePage.posts}
        addPostHandler={addPostHandler}
      />
    </div>
  );
};

export default Profile;
