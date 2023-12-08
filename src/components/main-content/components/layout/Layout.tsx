import classes from './Layout.module.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../utils/enums/active-routes.enum';
import React, { Suspense } from 'react';
import Preloader from '../../../shared/preloader/Preloader';

const ProfileClassContainer = React.lazy(
  () => import('./pages/profile/ProfileClassContainer')
);
const LoginContainer = React.lazy(() => import('./pages/login/LoginContainer'));
const UsersContainer = React.lazy(() => import('./pages/users/UsersContainer'));
const DialogsContainer = React.lazy(
  () => import('./pages/dialogs/DialogsContainer')
);
const PostsContainer = React.lazy(() => import('./pages/posts/PostsContainer'));
const Music = React.lazy(() => import('./pages/music/Music'));
const News = React.lazy(() => import('./pages/news/News'));
const Settings = React.lazy(() => import('./pages/settings/Settings'));
const Error = React.lazy(() => import('./pages/error/Error'));

interface ILayoutProps {
  initialized: boolean;
  getMeTC: () => void;
}
class Layout extends React.Component<ILayoutProps> {
  catchAllUnhandledErrors = () => {
    <Route
      path={ActiveRoutes.DEFAULT}
      element={<Navigate to={ActiveRoutes.PROFILE} />}
    />;
    alert('some error occurred');
  };

  componentDidMount(): void {
    this.props.getMeTC();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    );
  }

  render(): React.ReactNode {
    return !this.props.initialized ? (
      <Preloader isFetching={false} />
    ) : (
      <div className={classes.profileContainer}>
        <Suspense
          fallback={
            <div>
              <Preloader isFetching={false} />
            </div>
          }>
          <Routes>
            <Route
              path={ActiveRoutes.DEFAULT}
              element={<Navigate to={ActiveRoutes.PROFILE} />}
            />
            <Route
              path={ActiveRoutes.PROFILE + '/:userId?'}
              element={<ProfileClassContainer />}
            />
            <Route
              path={ActiveRoutes.USERS}
              element={<UsersContainer />}
            />
            <Route
              path={ActiveRoutes.DIALOGS}
              element={<DialogsContainer />}
            />
            <Route
              path={ActiveRoutes.DIALOGS + '/*'}
              element={<DialogsContainer />}
            />
            <Route
              path={ActiveRoutes.LOGIN}
              element={<LoginContainer />}
            />
            <Route
              path={ActiveRoutes.MUSIC}
              element={<Music />}
            />
            <Route
              path={ActiveRoutes.POSTS}
              element={<PostsContainer />}
            />
            <Route
              path={ActiveRoutes.NEWS}
              element={<News />}
            />
            <Route
              path={ActiveRoutes.SETTINGS}
              element={<Settings />}
            />
            <Route
              path="*"
              element={<Error />}
            />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default Layout;
