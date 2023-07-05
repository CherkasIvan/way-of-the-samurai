import React, {FC} from "react";
import classes from "./Layout.module.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Music from "./pages/music/Music";
import News from "./pages/news/News";
import Settings from "./pages/settings/Settings";
import { ActiveRoutes } from "../../../../utils/enums/active-routes.enum";
import Dialogs from "./pages/dialogs/Dialogs";
import Profile from "./pages/profile/Profile";
import { IPost } from "../../models/post.interface";
import { IUsers } from "../../models/users.interface";
import { IMessage } from "../../models/message.interface";
import { IActionType } from "../../../../redux/store";

interface ILayoutProps {
  postsData:IPost[],
  usersData: IUsers[],
  messagesData:IMessage[],
  dispatch: (action: IActionType) => void
}

const Layout: FC<ILayoutProps> = ({ postsData, usersData, messagesData,  dispatch}) => {
  return (
    <div className={classes.profileContainer}>
      <Routes>
        <Route
          path={ActiveRoutes.DEFAULT}
          element={<Navigate to={ActiveRoutes.PROFILE} />}
        />
        <Route
          path={ActiveRoutes.PROFILE}
          element={<Profile postsData={postsData}  dispatch={dispatch}
          />}
        />
        <Route
          path={ActiveRoutes.DIALOGS}
          element={
            <Dialogs
              usersData={usersData}
              messagesData={messagesData}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path={ActiveRoutes.DIALOGS + "/*"}
          element={
            <Dialogs
              usersData={usersData}
              messagesData={messagesData}
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
