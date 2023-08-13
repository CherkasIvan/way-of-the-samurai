import { FC } from 'react';
import classes from './Profile.module.scss';
import { IProfilePage } from '../../../../../../utils/models/profile-page.interface';
import Posts from './components/posts/Posts';

interface IProfileContainerProps {
  profilePage: IProfilePage;
  updatePostHandler: (text: string) => void;
  addPostHandler: (text: string) => void;
}

const Profile: FC<IProfileContainerProps> = ({
  profilePage,
  updatePostHandler,
  addPostHandler,
}) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts
        postsData={profilePage.posts}
        updatePostHandler={updatePostHandler}
        addPostHandler={addPostHandler}
      />
    </div>
  );
};

export default Profile;
