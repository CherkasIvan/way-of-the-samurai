import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import StoreContext from "./context/store-context";

const App  = ({ dispatch, store }) => {
  return (
  <StoreContext.Provider value={[store, dispatch]}>
    <div className="App">
      <Header />
      <MainContent/>
      <Footer />
    </div>
  </StoreContext.Provider>
  );
};

export default App;
