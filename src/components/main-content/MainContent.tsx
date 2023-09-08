import { Component, ReactNode } from 'react';
import classes from './MainContent.module.scss';
import NavigationContainer from './components/navigation/NavigationContainer';
import LayoutContainer from './components/layout/layoutContainer';

class MainContent extends Component {
  render(): ReactNode {
    return (
      <main className={classes.mainContainer}>
        <NavigationContainer />
        <LayoutContainer />
      </main>
    );
  }
}

export default MainContent;
