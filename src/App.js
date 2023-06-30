import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import { updateMessageText } from "./utils/functions/update-message";

const App  = ({ state }) => {
  return (
    <div className="App">
      <Header />
      <MainContent
        postsData={state.profilePage.posts}
        usersData={state.dialogsPage.users}
        messagesData={state.dialogsPage.messages}
        updateMessageText={updateMessageText}  
      />
      <Footer />
    </div>
  );
};

export default App;
