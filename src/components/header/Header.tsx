import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.container}>
      <img
        src={require("../../assets/img/logo.jpg")}
        alt="logo.jpg"
      />
    </header>
  );
};

export default Header;
