import React, {FC} from "react";
import classes from "./Message.module.scss";

interface IMessageProps {
  message: string;
}

const Message: FC<IMessageProps> = ({ message }) => {
  return (
    <div>
      <div className={classes.messageText}>
        <p className={classes.messageTextItem}>{message}</p>
      </div>
    </div>
  );
};

export default Message;
