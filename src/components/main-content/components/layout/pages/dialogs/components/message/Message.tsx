import React from "react";
import classes from "./Message.module.scss";

interface IMessageProps {
  text: string;
}

const Message: FC<IMessageProps> = ({ text }) => {
  return (
    <div>
      <div className={classes.messageText}>
        <p className={classes.messageTextItem}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
