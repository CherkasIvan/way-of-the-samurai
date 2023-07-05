import React, {FC} from "react";
import Navigation from "./components/navigation/Navigation";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout";

import { BrowserRouter } from "react-router-dom";
import { IPost } from "./models/post.interface";
import { IUsers } from "./models/users.interface";
import { IMessage } from "./models/message.interface";
import { IActionType } from "../../redux/store";

interface MainContentProps{
  postsData: IPost[],
  usersData: IUsers[],
  messagesData: IMessage[],
  newPostText: string,
  newMessageText: string,
  dispatch: (action: IActionType) => void
}

const MainContent: FC<MainContentProps> = ({
  postsData,
  usersData,
  messagesData,
  newPostText,
  newMessageText,
  dispatch
}) => {
  return (
    <main className={clasess.mainContainer}>
      <BrowserRouter>
        <Navigation />
        <Layout
          postsData={postsData}
          usersData={usersData}
          messagesData={messagesData}
          newPostText={newPostText}
          newMessageText={newMessageText}
          dispatch={dispatch}
        />
      </BrowserRouter>
    </main>
  );
};

export default MainContent;
