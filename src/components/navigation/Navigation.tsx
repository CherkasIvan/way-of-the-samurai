import React from "react";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <ul className={classes.navigationList}>
        <li className={classes.navigationItem}>
          <a
            href="/home"
            className={classes.navigationItemLink}
          >
            Home
          </a>
        </li>
        <li className={classes.navigationItem}>
          <a
            href="/main"
            className={classes.navigationItemLink}
          >
            Main
          </a>
        </li>
        <li className={classes.navigationItem}>
          <a
            href="/nav"
            className={classes.navigationItemLink}
          >
            Nav
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
