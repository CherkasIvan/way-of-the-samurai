import classes from './Layout.module.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import Music from './pages/music/Music';
import News from './pages/news/News';
import Settings from './pages/settings/Settings';
import { ActiveRoutes } from '../../../../utils/enums/active-routes.enum';
import DialogsContainer from './pages/dialogs/DialogsContainer';
import UsersContainer from './pages/users/UsersContainer';
import LoginContainer from './pages/login/LoginContainer';
import ProfileClassContainer from './pages/profile/ProfileClassContainer';
import React from 'react';
import { getMeTC } from '../../../../redux/thunk/auth-thunk';
import Preloader from '../../../shared/preloader/Preloader';

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
      </div>
    );
  }
}

export default Layout;
