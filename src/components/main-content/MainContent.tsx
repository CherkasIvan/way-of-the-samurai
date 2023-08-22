import classes from './MainContent.module.scss'
import Layout from './components/layout/Layout'
import NavigationContainer from './components/navigation/NavigationContainer'

const MainContent = () => {
  return (
    <main className={classes.mainContainer}>
      <NavigationContainer />
      <Layout />
    </main>
  )
}

export default MainContent
