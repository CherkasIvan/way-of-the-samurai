import React, {FC} from "react";
import classes from "./Layout.module.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Music from "./pages/music/Music";
import News from "./pages/news/News";
import Settings from "./pages/settings/Settings";
import { ActiveRoutes } from "../../../../utils/enums/active-routes.enum";
import Dialogs from "./pages/dialogs/Dialogs";
import Profile from "./pages/profile/Profile";
import { IDialog } from "../../models/dialog.interface";
import { IUsers } from "../../models/users.interface";
import { IMessage } from "../../models/messages.interface";

interface ILayoutProps {
  postsData:IDialog[],
  usersData: IUsers[],
  messagesData:IMessage[]
}

const Layout: FC<ILayoutProps> = ({ postsData, usersData, messagesData }) => {
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
