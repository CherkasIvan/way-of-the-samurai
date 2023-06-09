import React from "react";
import classes from "./Navigation.module.scss";
import { Routes } from "../../models/navigation.interface";

const Navigation = () => {
  const ROUTES: Routes[] = [
    {
      href: "/profile",
      label: "Profile",
    },
    {
      href: "/messages",
      label: "Messages",
    },
    {
      href: "/news",
      label: "News",
    },
    {
      href: "/music",
      label: "Music",
    },
    {
      href: "/settings",
      label: "Settings",
    },
  ];

  const listItems = ROUTES.map((el, index) => (
    <li className={classes.navigationItem} key={index}>
      <a
        href={el.href}
        className={classes.navigationItemLink}
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
