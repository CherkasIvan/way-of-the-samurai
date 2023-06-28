import React, {FC} from "react";
import Navigation from "./components/navigation/Navigation";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout";

import { BrowserRouter } from "react-router-dom";
import { IPost } from "./models/post.interface";
import { IUsers } from "./models/users.interface";
import { IMessage } from "./models/message.interface";

interface MainContentProps{
  postsData: IPost[],
  usersData: IUsers[],
  messagesData: IMessage[]
 
}

const MainContent: FC<MainContentProps> = ({
  postsData,
  usersData,
  messagesData,
}) => {
  return (
    <main className={clasess.mainContainer}>
      <BrowserRouter>
        <Navigation />
        <Layout
          postsData={postsData}
          usersData={usersData}
          messagesData={messagesData}
          
        />
      </BrowserRouter>
    </main>
  );
};

export default MainContent;
