import classes from './Layout.module.scss'
import { Route, Routes, Navigate } from 'react-router-dom'
import Music from './pages/music/Music'
import News from './pages/news/News'
import Settings from './pages/settings/Settings'
import { ActiveRoutes } from '../../../../utils/enums/active-routes.enum'
import DialogsContainer from './pages/dialogs/DialogsContainer'
import UsersContainer from './pages/users/UsersContainer'
import ProfileClassContainer from './pages/profile/ProfileClassContainer'

const Layout = () => {
  return (
    <div className={classes.profileContainer}>
      <Routes>
        <Route path={ActiveRoutes.DEFAULT} element={<Navigate to={ActiveRoutes.PROFILE} />} />
        <Route path={ActiveRoutes.PROFILE + '/:userId?'} element={<ProfileClassContainer />} />
        <Route path={ActiveRoutes.USERS} element={<UsersContainer />} />
        <Route path={ActiveRoutes.DIALOGS} element={<DialogsContainer />} />
        <Route path={ActiveRoutes.DIALOGS + '/*'} element={<DialogsContainer />} />
        <Route path={ActiveRoutes.MUSIC} element={<Music />} />
        <Route path={ActiveRoutes.NEWS} element={<News />} />
        <Route path={ActiveRoutes.SETTINGS} element={<Settings />} />
      </Routes>
    </div>
  )
}

export default Layout
