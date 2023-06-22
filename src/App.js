import React from "react";
import "./App.scss";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MainContent from "./components/main-content/MainContent.tsx";

const App = ({ postsData, dialogsData }) => {
  return (
    <div className="App">
      <Header />
      <MainContent
        postsData={postsData}
        dialogsData={dialogsData}
      />
      <Footer />
    </div>
  );
};

export default App;
