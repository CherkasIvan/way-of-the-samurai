import React, { useState } from "react";
import classes from "./Post.module.scss";

const Post = ({ message }) => {
  const [conter, setCount] = useState(0);
  return (
    <div className={classes.PostContainer}>
      <img
        src={require("../../../../../../../../assets/img/avatar.jpg")}
        alt="logo.jpg"
        className={classes.PostUserImg}
      ></img>
      <p className={classes.PostUserText}> {message}</p>

      <div className={classes.ButtonContainer}>
        <button
          className={classes.PostUserLike}
          onClick={() => setCount(Number(conter + 1))}
        >
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
          {conter}
        </span>
      </div>
    </div>
  );
};

export default Post;
