import React from "react";
import Navigation from "./components/navigation/Navigation.tsx";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout.tsx";

import { BrowserRouter } from "react-router-dom";

const MainContent = () => {
  return (
    <main className={clasess.mainContainer}>
      <BrowserRouter>
        <Navigation />
        <Layout />
      </BrowserRouter>
    </main>
  );
};

export default MainContent;
