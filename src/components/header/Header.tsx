import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <ul className={classes.headerList}>
        <img
          src={require("../../assets/img/logo.jpg")}
          alt="logo.jpg"
        />
        <li className={classes.headerItem}>
          <a
            href="/home"
            className={classes.headerItemLink}
          >
            Home
          </a>
        </li>
        <li className={classes.headerItem}>
          <a
            href="/main"
            className={classes.headerItemLink}
          >
            Main
          </a>
        </li>
        <li className={classes.headerItem}>
          <a href="/nav" className={classes.headerItemLink}>
            Nav
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
