import React from "react";
import Navigation from "./components/navigation/Navigation.tsx";
import clasess from "./MainContent.module.scss";
import Layout from "./components/layout/Layout.tsx";

const MainContent = () => {
  return (
    <main className={clasess.mainContainer}>
      <Navigation />
      <Layout />
    </main>
  );
};

export default MainContent;
