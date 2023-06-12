import React from "react";
import classes from "./Navigation.module.scss";
import { Routes } from "../../../../utils/data/routs.ts";

const Navigation = () => {
  const listItems = Routes.map((el, index) => (
    <li className={classes.navigationItem} key={index}>
      <a
        href={el.href}
        className={classes.navigationItemLink}
        activeClassName={classes.activeLink}
      >
        {el.label}
      </a>
    </li>
  ));

  return (
    <>
      <ul className={classes.navigationList}>
        {listItems}
      </ul>
    </>
  );
};

export default Navigation;
