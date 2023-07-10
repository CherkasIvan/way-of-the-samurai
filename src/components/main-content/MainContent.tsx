import {FC} from "react";
import Navigation from "./components/navigation/Navigation";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout";
import { IPost } from "./models/post.interface";
import { IUsers } from "./models/users.interface";
import { IMessage } from "./models/message.interface";
import { IAction } from "../../utils/models/action.interface";
import { IState } from "./models/state.interface";

interface MainContentProps{
  postsData: IPost[],
  usersData: IUsers[],
  messagesData: IMessage[],
  dispatch: (action: IAction) => void
  store: IState
}

const MainContent: FC<MainContentProps> = ({
  postsData,
  usersData,
  messagesData,
  dispatch,
  store
}) => {
  return (
    <main className={clasess.mainContainer}>
        <Navigation />
        <Layout
          postsData={postsData}
          usersData={usersData}
          messagesData={messagesData}
          dispatch={dispatch}
          store={store}
        />
    </main>
  );
};

export default MainContent;
