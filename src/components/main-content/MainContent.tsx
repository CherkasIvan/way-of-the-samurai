import {FC} from "react";
import Navigation from "./components/navigation/Navigation";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout";
import { IPost } from "./models/post.interface";
import { IUsers } from "./models/users.interface";
import { IMessage } from "./models/message.interface";
import { IAction } from "../../utils/models/action.interface";

interface MainContentProps{
  postsData: IPost[],
  usersData: IUsers[],
  messagesData: IMessage[],
  dispatch: (action: IAction) => void
}

const MainContent: FC<MainContentProps> = ({
  postsData,
  usersData,
  messagesData,
  dispatch
}) => {
  return (
    <main className={clasess.mainContainer}>
        <Navigation />
        <Layout
          postsData={postsData}
          usersData={usersData}
          messagesData={messagesData}
          dispatch={dispatch}
        />
    </main>
  );
};

export default MainContent;
