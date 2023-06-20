import React, { useState } from "react";
import classes from "./Post.module.scss";
import ProfileInfo from "../../profileUnfo/ProfileInfo.tsx";

const Post = ({ message, name }) => {
  const [conter, setCount] = useState(0);
  return (
    <div className={classes.PostContainer}>
      <ProfileInfo
        message={message}
        name={name}
      ></ProfileInfo>

      <div className={classes.ButtonContainer}>
        <button
          className={classes.PostUserLike}
          onClick={() => setCount(Number(conter + 1))}
        >
          <img
            src={
              require("../../../../../../../../../assets/img/like.svg")
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
