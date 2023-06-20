import React from "react";
import classes from "./Message.module.scss";

const Message = (props) => {
  return (
    <div>
      <div className={classes.messageText}>
        <p className={classes.messageTextItem}>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
