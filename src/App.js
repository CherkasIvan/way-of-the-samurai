import React from "react";
import Header from "./components/header/Header.tsx";
import Technologies from "./components/technologies/Technologies.tsx";
import Footer from "./components/footer/Footer.tsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
};

export default App;
