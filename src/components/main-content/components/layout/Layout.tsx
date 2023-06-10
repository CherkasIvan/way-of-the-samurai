import React from "react";
import Profile from "./pages/profile/Profile.tsx";
import classes from "./Layout.module.scss";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Messages from "./pages/messages/Messages.tsx";
import Music from "./pages/music/Music.tsx";
import News from "./pages/news/News.tsx";
import Settings from "./pages/settings/Settings.tsx";
import { ActiveRoutes } from "../../../../utils/enums/active-routes.enum.ts";

const Layout = () => {
  return (
    <div className={classes.profileContainer}>
      <BrowserRouter>
        <Routes>
          <Route
            path={ActiveRoutes.DEFAULT}
            element={<Navigate to={ActiveRoutes.PROFILE} />}
          />
          <Route
            path={ActiveRoutes.PROFILE}
            element={<Profile />}
          />
          <Route
            exact
            path={ActiveRoutes.MESSAGES}
            element={<Messages />}
          />
          <Route
            exact
            path={ActiveRoutes.MUSIC}
            element={<Music />}
          />
          <Route
            path={ActiveRoutes.NEWS}
            element={<News />}
          />
          <Route
            exact
            path={ActiveRoutes.SETTINGS}
            element={<Settings />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
