import React from "react";
import Profile from "../profile/Profile.tsx";
import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={classes.profileContainer}>
      <Profile />
    </div>
  );
};

export default Layout;
