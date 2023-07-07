import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";

const App  = ({ state, dispatch, store }) => {
  return (
    <div className="App">
      <Header />
      <MainContent
        postsData={state.profilePage.posts}
        usersData={state.dialogsPage.users}
        messagesData={state.dialogsPage.messages}
        newPostText={state.profilePage.newPostText}
        newMessageText={state.dialogsPage.newMessageText}
        dispatch={dispatch}
      />
      <Footer />
    </div>
  );
};

export default App;
