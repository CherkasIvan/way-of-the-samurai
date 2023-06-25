import React from "react";
import classes from "./Layout.module.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Music from "./pages/music/Music.tsx";
import News from "./pages/news/News.tsx";
import Settings from "./pages/settings/Settings.tsx";
import { ActiveRoutes } from "../../../../utils/enums/active-routes.enum.ts";
import Dialogs from "./pages/dialogs/Dialogs.tsx";
import Profile from "./pages/profile/Profile.tsx";

const Layout = ({ postsData, usersData, messagesData }) => {
  return (
    <div className={classes.profileContainer}>
      <Routes>
        <Route
          path={ActiveRoutes.DEFAULT}
          element={<Navigate to={ActiveRoutes.PROFILE} />}
        />
        <Route
          path={ActiveRoutes.PROFILE}
          element={<Profile postsData={postsData} />}
        />
        <Route
          path={ActiveRoutes.DIALOGS}
          element={
            <Dialogs
              usersData={usersData}
              messagesData={messagesData}
            />
          }
        />
        <Route
          path={ActiveRoutes.DIALOGS + "/*"}
          element={
            <Dialogs
              usersData={usersData}
              messagesData={messagesData}
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
