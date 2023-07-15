import Navigation from "./components/navigation/Navigation";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout";
import { FC } from "react";
import { IState } from "./models/state.interface";

interface IMainContentProps {
  store: IState
}

const MainContent: FC<IMainContentProps> = ({store}) => {
  return (
    <main className={clasess.mainContainer}>
        <Navigation />
        <Layout store={store}/>
    </main>
  );
};

export default MainContent;
