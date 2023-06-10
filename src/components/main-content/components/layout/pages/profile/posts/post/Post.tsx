import React from "react";
import classes from "./Post.module.scss";

const Post = ({ message, likeCounter }) => {
  return (
    <div className={classes.PostContainer}>
      <img
        src={require("../../../../../../../../assets/img/avatar.jpg")}
        alt="logo.jpg"
        className={classes.PostUserImg}
      ></img>
      <p className={classes.PostUserText}> {message}</p>

      <div className={classes.ButtonContainer}>
        <button className={classes.PostUserLike}>
          <img
            src={
              require("../../../../../../../../assets/img/like.svg")
                .default
            }
            alt="like-logo.jpg"
            className={classes.PostUserLikeLogo}
          ></img>
        </button>
        <span className={classes.PostUserLikeCounter}>
          {likeCounter || 0}
        </span>
      </div>
    </div>
  );
};

export default Post;
