import React from "react";
import Navigation from "../navigation/Navigation.tsx";
import Technologies from "../technologies/Technologies.tsx";
import clasess from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <main className={clasess.mainContainer}>
      <Navigation />
      <Technologies />
    </main>
  );
};

export default MainContent;
