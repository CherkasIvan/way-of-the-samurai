import React from "react";
import classes from "./Profile.module.scss";
import Posts from "./components/posts/Posts.tsx";


const Profile = ({ postsData }) => {
  return (
    <div className={classes.profileContainer}>
      img + des
      <Posts postsData={postsData}></Posts>
    </div>
  );
};

export default Profile;
