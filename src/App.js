import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";

const App  = ({store}) => {
  return (
    <div className="App">
      <Header />
      <MainContent store={store}/>
      <Footer />
    </div>
  );
};

export default App;
