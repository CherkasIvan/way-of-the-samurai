import './App.scss'
import Footer from './components/footer/Footer'
import MainContent from './components/main-content/MainContent'
import HeaderContainer from './components/header/HeaderContainer'

const App = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
