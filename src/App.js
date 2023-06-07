import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <Technologies />
      </main>
    </div>
  );
};

export default App;
