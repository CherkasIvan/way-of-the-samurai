import React from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts.tsx";

const Profile = () => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts></Posts>
    </div>
  );
};

export default Profile;
