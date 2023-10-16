import classes from './Layout.module.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../utils/enums/active-routes.enum';
import React, { Suspense } from 'react';
import { getMeTC } from '../../../../redux/thunk/auth-thunk';
import Preloader from '../../../shared/preloader/Preloader';

const ProfileClassContainer= React.lazy(() => import('./pages/profile/ProfileClassContainer'));
const LoginContainer= React.lazy(() => import('./pages/login/LoginContainer'));
const UsersContainer= React.lazy(() => import('./pages/users/UsersContainer'));
const DialogsContainer= React.lazy(() => import('./pages/dialogs/DialogsContainer'));
const Music= React.lazy(() => import('./pages/music/Music'));
const News= React.lazy(() => import('./pages/news/News'));
const Settings= React.lazy(() => import('./pages/settings/Settings'));


interface ILayoutProps {
  initialized: boolean;
  getMeTC: () => void;
}
class Layout extends React.Component<ILayoutProps> {
  componentDidMount(): void {
    this.props.getMeTC();
  }
  render(): React.ReactNode {
    return !this.props.initialized ? (
      <Preloader isFetching={false} />
    ) : (
      <div className={classes.profileContainer}>
				<Suspense fallback={ <div><Preloader isFetching={false}/></div>}>
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
            path={ActiveRoutes.NEWS}
            element={<News />}
          />
          <Route
            path={ActiveRoutes.SETTINGS}
            element={<Settings />}
          />
        </Routes>
				</Suspense>
      </div>
    );
  }
}

export default Layout;
