import React from "react";
import "./App.scss";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MainContent from "./components/main-content/MainContent.tsx";

const App = ({ state }) => {
  return (
    <div className="App">
      <Header />
      <MainContent
        postsData={state.profilePage.posts}
        usersData={state.dialogsPage.users}
        messagesData={state.dialogsPage.messages}
      />
      <Footer />
    </div>
  );
};

export default App;
