import React from "react";
import "./App.scss";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MainContent from "./components/main-content/MainContent.tsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
