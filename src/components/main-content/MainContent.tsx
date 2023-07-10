import Navigation from "./components/navigation/Navigation";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout";


const MainContent = () => {
  return (
    <main className={clasess.mainContainer}>
        <Navigation />
        <Layout/>
    </main>
  );
};

export default MainContent;
