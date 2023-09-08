import { FC } from 'react';
import classes from './Profile.module.scss';
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface';
import PostsContainer from './components/posts/PostsContainer';
import CurrentProfile from './components/currentProfile/CurrentProfile';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum';

export interface IProfileProps {
  profilePage: IProfilePage;
  isAuth: boolean;
  authorizedUserId: number;
  addPostHandler: (text: string) => void;
  updateMyStatusTC: (message: string) => any;
}

const Profile: FC<IProfileProps> = ({
  profilePage,
  addPostHandler,
  isAuth,
  authorizedUserId,
  updateMyStatusTC,
}) => {
  return !isAuth && !authorizedUserId ? (
    <Navigate to={ActiveRoutes.LOGIN} />
  ) : (
    <div className={classes.profileContainer}>
      <div className={classes.CurrentProfile}>
        <CurrentProfile profilePage={profilePage} updateMyStatusTC={updateMyStatusTC} />
      </div>
      <PostsContainer postsData={profilePage.posts} addPostHandler={addPostHandler} />
    </div>
  );
};

export default Profile;
