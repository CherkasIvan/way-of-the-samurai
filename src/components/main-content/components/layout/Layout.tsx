import React from "react";
import classes from "./Layout.module.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Music from "./pages/music/Music";
import News from "./pages/news/News";
import Settings from "./pages/settings/Settings";
import { ActiveRoutes } from "../../../../utils/enums/active-routes.enum";
import Dialogs from "./pages/dialogs/Dialogs";
import Profile from "./pages/profile/Profile";
import StoreContext from "../../../../context/store-context";
import { IProfilePage } from "../../../../utils/models/profile-page.interface";
import { IDialogsPage } from "../../../../utils/models/dialogs-page.interface";
import { IAction } from "../../../../utils/models/action.interface";

const Layout = () => {
  const state = React.useContext(StoreContext);
  const profilePage: IProfilePage = state[0].profilePage
  const dialogsPage: IDialogsPage = state[0].dialogsPage
  const sidebar: any = state[0].sidebar
  const dispatch: (action: IAction) => void = state[1]
  return (
    <div className={classes.profileContainer}>
      <Routes>
        <Route
          path={ActiveRoutes.DEFAULT}
          element={<Navigate to={ActiveRoutes.PROFILE} />}
        />
        <Route
          path={ActiveRoutes.PROFILE}
          element={<Profile postsData={profilePage.posts}  dispatch={dispatch}
          />}
        />
        <Route
          path={ActiveRoutes.DIALOGS}
          element={
            <Dialogs
              usersData={dialogsPage.users}
              messagesData={dialogsPage.messages}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path={ActiveRoutes.DIALOGS + "/*"}
          element={
            <Dialogs
              usersData={dialogsPage.users}
              messagesData={dialogsPage.messages}
              dispatch={dispatch}
            />
          }
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
};

export default Layout;
