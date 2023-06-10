import React from "react";
import classes from "./AddPost.module.scss";

const AddPost = () => {
  return (
    <div className={classes.AddPostContaner}>
      <textarea></textarea>
      <button>Add new post</button>
    </div>
  );
};

export default AddPost;
