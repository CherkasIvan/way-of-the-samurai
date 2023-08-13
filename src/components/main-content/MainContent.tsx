import Navigation from './components/navigation/Navigation';
import classes from './MainContent.module.scss';
import Layout from './components/layout/Layout';

const MainContent = () => {
  return (
    <main className={classes.mainContainer}>
      <Navigation />
      <Layout />
    </main>
  );
};

export default MainContent;
